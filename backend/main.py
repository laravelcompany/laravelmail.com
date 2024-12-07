import os
import re
import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from pathlib import Path
from typing import Dict

import re

class TemplateManager:
    def __init__(self, template_dir: str):
        """Initialize the Jinja2 template manager with the directory."""
        self.templates = Jinja2Templates(directory=template_dir)

    def _replace_links_and_emails(self, content: str, template_name: str) -> str:
        """
        Replace all links and email addresses in the content with 'laravelmail.com',
        while preserving image sources. Also, replace title and meta description.

        :param content: Raw HTML content as a string.
        :param template_name: Name of the template (used for title and meta description).
        :return: Updated HTML content with replacements.
        """
        # Separate <img> tags to preserve them
        img_tag_pattern = r'(<img\s+[^>]*src="[^"]*"[^>]*>)'
        img_tags = re.findall(img_tag_pattern, content)

        # Temporarily replace <img> tags with placeholders
        placeholder = "@@IMG@@"
        content = re.sub(img_tag_pattern, placeholder, content)

        # Patterns for links and emails (excluding placeholders)
        link_pattern = r'https?://[^\s"<>]+'
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

        # Replace links and emails
        content = re.sub(link_pattern, 'https://laravelmail.com', content)
        content = re.sub(email_pattern, 'info@laravelmail.com', content)

        # Reinsert the preserved <img> tags
        for img_tag in img_tags:
            content = content.replace(placeholder, img_tag, 1)

        # Replace <title> with the template name if found
        content = re.sub(r'<title>.*?</title>', f'<title>Free laravel mail template for  {template_name} | laravelmail.com </title> ', content)
        
        # If no <title> is found, add one with the template name
        if not re.search(r'<title>', content):
            content = f'<title>Free laravel mail template for {template_name} | laravelmail.com </title>' + content
        
        # Replace <meta name="description"> with a template description
        content = re.sub(
            r'<meta\s+name="description"\s+content=".*?"\s*/>',
            f'<meta name="description" content="{template_name} description." />',
            content
        )
        
        # If no <meta description> is found, add one with the template name
        if not re.search(r'<meta\s+name="description"', content):
            content = f'<meta name="description" content="{template_name} description." />' + content

        return content

    def render_template(self, template_name: str, context: Dict[str, str], request: Request) -> HTMLResponse:
        """
        Render a Jinja2 template with dynamic text replacement for links, emails, title, and meta description.

        :param template_name: The template name (without .html).
        :param context: Dictionary of variables to inject into the template.
        :param request: FastAPI request object.
        :return: Rendered HTML response with replaced links, emails, title, and meta description.
        """
        context["request"] = request
        template = self.templates.get_template(f"{template_name}.html")

        # Render template with context
        rendered_content = template.render(context)

        # Replace links, emails, title, and meta description
        updated_content = self._replace_links_and_emails(rendered_content, template_name)

        return HTMLResponse(content=updated_content)
# Initialize FastAPI app
app = FastAPI()

# Initialize TemplateManager
templates_dir = Path(__file__).parent.resolve() / "templates"
template_manager = TemplateManager(str(templates_dir))

# Set CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/templates/{template_name}")
async def read_template(template_name: str, request: Request):
    # Define context variables to pass to the template
    context = {
        "title": "Fast Food Page",
        "description" : "Some meta description to be added here"
    }
    return template_manager.render_template(template_name, context, request)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=11001)
