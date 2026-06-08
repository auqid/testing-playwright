Exercise 1

Go to:

Automation Exercise Login Page

Inspect:

Name field
Email field
Login email field
Login password field
Signup button

For each element write:

Element
...
Locator Choice
...
Reason

Why did you choose that locator?

Name field
<input type="text" data-qa="signup-name" placeholder="Name" name="name" value="" required="">
getByPlaceHolder("Name")
//because it has placeholder Name
Email field
<input type="email" data-qa="signup-email" placeholder="Email Address" name="email" value="" required="" style="background-size: auto,">
page.locator('input[data-qa="signup-email"]')
//because there are two email fields on /login and both have placeholder email so i chose one of its attribute
Login email field
<input type="email" data-qa="login-email" placeholder="Email Address" name="email">
page.locator('input[data-qa="login-email"])
//because there are two email fields on /login and both have placeholder email so i chose one of its attribute
Login password field
<input type="password" data-qa="login-password" placeholder="Password" name="password" value="" required="">
getByPlaceholder("Password)
//becuase it has placeholder password
Signup button
<button type="submit" data-qa="signup-button" class="btn btn-default">Signup</button>
getByRole("button", name={Signup})
//because getByRole is the best way to get a locator

Exercise 2

Open:

Automation Exercise

Open Console.

Navigate around the site.

Look for:

errors
warnings
failed network requests

Document anything interesting.

nothing interesting just some google font are being blocked by csp Blocked loading mixed active content “http://fonts.googleapis.com/css?family=Roboto:400,300,400italic,500,700,100”

Exercise 3

Open:

Automation Exercise

Open Network tab.

Refresh page.

Answer:

How many requests are sent? 16 requests
What request takes the longest? html get request for the webpage took 2 seconds
Are any requests failing? some are being blocked by ublock origin (tracking) and csp font are blocked
What status codes do you see? 200 404
