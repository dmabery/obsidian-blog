---
Title: "How to Add Conditional Class Rendering in Next JS"
Tags: ["programming"]
Date: "2022-04-24"
Description: "A short explanation and example of rendering conditional classes with Next JS and Tailwind."
Published: true
Slug: "how-to-add-conditional-class-rendering-in-next-js"
Type: "Aside"
---
Conditional class rendering is pretty simple, but I've had to think through it a few times and always forget how to do it immediately. Hopefully this helps me and will help you too.

<SideNote title="Important ⚠️" content="I'm using Tailwind for my CSS, but if you're using custom CSS, the idea is the same, the classes will just be different." />

In this example, I'm trying to render different classes based on whether or not there is an `image` prop passed to my `PageTitle` component. I'm using this to display the title and description on my site, but on the home page I have a .gif that I don't want on any other pages. So on the home page, I'm passing an `image` prop and on the other pages I'm not. I have conditional rendering statement adding a div as a child to flexbox if there is an image prop.

The issue I was trying to solve was my mobile display of the `PageTitle` component. If there was an image, then the text covered 2/3 of the screen and the image was next to it. All good there. But if there wasn't an image, the text still covered 2/3 of the screen and created an awkward empty space. So on mobile, if there was no `image` prop, I wanted to take the `flex` property off the container but put it back for larger breakpoints because I didn't want to description text to span the entire page container. So here's what I did.

## The Solution
First, create a variable with a ternary operator to check whatever you want to check. In this case, if `image` was true, I wanted to add `flex` class. If `image` was `false`, I wanted to add `flex-none` and `sm:flex` breakpoint. `sm-flex` says "On break points larger than small, do this." `flex-none` is the behavior of all other breakpoints. In this case, just the `xs` breakpoint.

```javascript
const PageTitle = ({title, description, image}) => {

const condition = image ? 'flex' : 'flex-none sm:flex'
```

Next, I added that ternary operator as a string template literal to my classes on the container rendering the component:

```javascript
const PageTitle = ({title, description, image}) => {

const condition = image ? 'flex' : 'flex-none sm:flex'

return (
	<div className={`flex-row items-center ${condition}`}>
```

So if image is `true`, the `flex` container will be added as a `className` and the component will flex naturally. If it's false, on breakpoints smaller than `small`, it will be a normal, full-length row.

Note: If you don't have any classes there in both instances, you can just add the variable to the `className` and don't have to do a string template literal.