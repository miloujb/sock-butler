# The Sock Butler Test

Hi there! My name is Emily Bailey, and this is my tech test for Osan Limited. This is a small blog project made with Next.js, Prismic and Firebase for authentication.

# How to view The Sock Butler Test

First, cd into the `sock-butler` folder. Then run `npm i` to install all required dependencies. To view this in your browser, please run `npm run dev`.

## The Home Page

The first page that you will see is the home page. This should make a request to the API, and bring back a blog article. There is also the opportunity to click on the 'login' button, which will then allow the user to access their account page if authorised correctly.

Due to the time constraints, I was unable to query the API correctly to bring back one article, and so I have hard-coded one of the articles from the API in the place where it would sit. 

## The Blog

The Blog page makes a request to the API (in our case, we're using Prismic to host our API), and brings back a list of all articles that we have. 

## The Individual Blog Pages

The individual blog pages will take the user directly to a specific article, following the link from the blog page.

However, you will see that this page is currently not showing the correct information, and is triggering an error. This, I believe, is due to the `getServerSideProps` function, which I do not think is working as it should. 

## The Login and Account Pages

The login page allows the user to fill in their username and password, which will then take them to a hidden page that will show their account information.

However, due to time constraints and technical issues, I have been unable to successfully complete the Firebase authentication. As a result, I have chosen not to show broken code and cause an error to be thrown, but to show a simple 'login' link to send the user to the account page. 

# Dependencies

    "@chakra-ui/core": "^0.8.0",
    "@emotion/react": "^11.1.5",
    "firebase": "^8.2.10",
    "firebase-admin": "^9.5.0",
    "next": "10.0.7",
    "nookies": "^2.5.2",
    "prismic-javascript": "^3.0.2",
    "prismic-reactjs": "^1.3.3",
    "react": "17.0.1",
    "react-dom": "17.0.1"

# Recap

Thank you for viewing my page! I thoroughly enjoyed learning and implementing the technologies required to create this, however, there are, of course, a few things that I would do if I had been able to give more time to the project.

The first, and perhaps most obvious point is that I would have liked to have been able to return each individual article correctly. This is perhaps the part of the project I spent the most time on, but I have been unable to resolve it. Having gone into some deep research about this, I have found that the 'getServerSideProps' function 

The second point is that I would have liked to have been able to fully complete the Firebase authentication. While a lot of the dependencies are installed, it is clear that it is not complete, something which I'm quite disappointed in myself for. I would have liked to be able to present you with a fully-functioning project - had I been able to spend days or weeks on this project, I certainly would have been able to, however, I felt it would be dishonest to present that as two or three hours' of work. 

The third point is that I would have liked to have presented better UI design on this project - I feel that this does not show off my skill to the best of my ability, but being aware of the time constraints, I felt it better to focus on the functionality of this project rather than the aesthetics of it. 

Regardless of the outcome, I would like to thank you for this fantastic experience, and I hope to hear from you soon!

Emily Bailey, March 2021