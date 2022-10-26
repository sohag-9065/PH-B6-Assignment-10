import React from 'react';

const Blog = () => {
    return (
        <div className='mx-12 space-y-10 mb-20'>
            <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png" className="max-w-md rounded-lg shadow-2xl" alt=''/>
                    <div className='space-y-4'>
                        <h1 className="text-3xl font-bold">Cross-origin resource sharing (CORS)</h1>
                        <p className=" ">Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. </p>
                        <p className=" ">It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                        <p>The same-origin policy is very restrictive and consequently various approaches have been devised to circumvent the constraints. Many websites interact with subdomains or third-party sites in a way that requires full cross-origin access. A controlled relaxation of the same-origin policy is possible using cross-origin resource sharing (CORS).</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg" className="max-w-md rounded-lg shadow-2xl" alt=''/>
                    <div className='space-y-4'>
                        <h1 className="text-3xl font-bold">Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <p className=" ">Google Firebase is a platform for development of web application. It enables you to construct the whole application on the front-end, without having to write any server-side code. </p>
                        <p>It also allows you to put up server-side logic using Firebase Functions if you need to respond to certain events (such as the generation of data or files, login, and https requests) in order to send emails or push alerts, or to process the data after it has been written. Authenticating users into your project is easy using Firebase Authentication, which provides a choice of backend services, simple SDKs, and pre-built UI frameworks. </p>
                        <p>There are several other means of authentication that it allows, including passwords, phone numbers, and well-known federated identity providers such as Google, Facebook, and Twitter.</p>
                        <p>Top Alternatives to Firebase Authentication:1.Auth0. 2.MongoDB. 3.Okta.4.JSON Web Token.5.Amazon Cognito.6.Keycloak.</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://cdn-images-1.medium.com/max/641/1*mJpDhhE-fOLnPzQhpKin4w.png" className="max-w-md rounded-lg shadow-2xl" alt=''/>
                    <div className='space-y-4'>
                        <h1 className="text-3xl font-bold">How does the private route work?</h1>
                        <p className=" ">PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. </p>
                        <p>Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://miro.medium.com/max/632/1*xsQYYYvG-07C3lAYcTvuRA.png" className="max-w-md rounded-lg shadow-2xl" alt=''/>
                    <div className='space-y-4'>
                        <h1 className="text-3xl font-bold">What is Node? How does Node work?</h1>
                        <p className=" ">Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.</p>
                        <p>Node.JS works and runs on the VB JavaScript engine. An essential thing to comprehend is that Node isn’t a web server. In this article will give a simple method to comprehend the outline of how Node.JS works? along with its functions, what makes Node.JS extraordinary and clarify that it’s something other than server-side JavaScript.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;