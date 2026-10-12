Aurelia Studio — Architecture & Interior Design Website Template

Aurelia Studio is a modern, responsive website template for architecture studios, interior designers, and creative practices.

Built with React, Vite, and Framer Motion, it features an editorial-inspired design, project gallery, services section, studio introduction, and contact links.

Features

* Responsive website layout
* Elegant typography and minimalist styling
* Animated project cards
* Nine sample project entries
* Centralized site configuration
* Customizable studio name, hero text, and contact links
* Easy-to-replace project images
* React and Vite development setup

Requirements

Install the following before getting started:

* Node.js (a current supported version)
* npm
* A code editor, such as Visual Studio Code

Getting Started

1. Install dependencies

Open a terminal in the project folder and run:

npm install

2. Start the development server

npm run dev

Open the local URL printed in the terminal to preview the website.

3. Create a production build

npm run build

The production files will be generated in the dist folder.

Customization

Open src/App.jsx.

Change the studio branding

Find the siteConfig object near the top of the file. Update the studio name, hero text, email, phone number, and Instagram URL there.

Use your own contact details before publishing the website.

Edit the project gallery

Find the projects array near the top of src/App.jsx.

Each project contains:

* title — project name
* category — project type
* year — project year
* image — image URL
* alt — image description for accessibility
* large — optional setting for a larger project card

Edit the existing entries or add your own projects. Keep each entry’s structure consistent.

Replace project images

Replace the image URLs in the projects array with images you own or are licensed to use.

The sample photos are hosted by Unsplash and require internet access. Check the applicable image license and terms before redistributing or reusing images in commercial projects.

Change the visual design

* src/App.css — main layout, colors, typography, spacing, and responsive styles
* src/index.css — global styling
* index.html — page metadata and browser title

Deployment

Build the website with:

npm run build

You can deploy the generated dist folder using a compatible static hosting service, or connect the project repository to a hosting platform that supports Vite.

Follow your chosen hosting provider’s current deployment instructions.

Technology Stack

* React
* Vite
* Framer Motion
* CSS
* Google Fonts: Cormorant Garamond and Inter

Before Publishing

* Replace all demo branding and placeholder contact details.
* Add your own project content and properly licensed images.
* Update the page title and favicon.
* Test the layout on mobile and desktop.
* Run a production build.
* Verify all navigation and external links.

License and Third-Party Assets

This template is intended to provide website source code for customization. A separate license should accompany any commercial distribution and explain the buyer’s permitted use.

Third-party assets, including photos and fonts, remain subject to their respective licenses and terms. Do not assume that every demo image can be redistributed with the source code.

⸻

Aurelia Studio
Website template by TekodeX.