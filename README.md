# Bitter Sweet - 3D Café Exploration Website

Welcome to the Bitter Sweet website, where you can explore Sydney's café culture through an interactive 3D experience. This site offers a unique way to experience café interiors and atmospheres via 3D models, videos, and dynamic media.

## Rendering the Site with VS Code Live Server
To get the best experience while viewing this project, it's recommended to use VS Code Live Server or any other IDE server. Running the site locally without a server can cause issues due to Cross-Origin Resource Sharing (CORS) when rendering 3D models.

Steps to Run with VS Code Live Server:
1. Install VS Code Live Server Extension:
   - Open VS Code.
   - Go to the Extensions tab (left side panel).
   - Search for "Live Server".
   - Click Install.
  
2. Open the Project Folder:
   - Open VS Code.
   - Click File > Open Folder.
   - Select the folder where your project is located.
   - Start Live Server:

3. Right-click on the index.html file.
   - Select "Open with Live Server" from the dropdown.
   - Your default browser should open, showing the site without any CORS issues.
   - Using Live Server ensures smooth loading of 3D models and other assets, avoiding local file system restrictions.

## Why Local Viewing Might Not Work
If you attempt to run the site directly through your local file system (e.g., by opening index.html in your browser without a server), the 3D models won't render properly due to CORS (Cross-Origin Resource Sharing) restrictions. This is because the 3D models use a model-viewer that requires resources to be served from a proper server environment.

## Failing to View? Check My GitHub
If you're having trouble running the site or experiencing CORS issues, you can view a compressed and fully functional version of the site on my GitHub repository. This version is pre-configured to avoid these problems.
