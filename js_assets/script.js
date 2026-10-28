/* 
   Navigation Menu

   This function shows and hides the navigation menu
   when the menu button is clicked.
*/

function toggleMenu() {

    // Get the navigation menu using its ID.
    const navbar = document.getElementById("navbar");

    // Check if the navigation menu is currently hidden.
    if (navbar.style.display === "none" || navbar.style.display === "") {

        // Show the navigation menu.
        navbar.style.display = "block";

    } else {

        // Hide the navigation menu.
        navbar.style.display = "none";
    }
}

 /*
   Enquiry Form Validation

   This checks whether the user has completed
   the name, email and message fields.
*/

const enquiryForm = document.getElementById("enquiryForm");

// Check if the enquiry form exists on the page.
if (enquiryForm) {

    // Detect when the user submits the form.
    enquiryForm.addEventListener("submit", function(event) {

        // Prevent the form from submitting immediately.
        event.preventDefault();

        // Get the user's name.
        const name = document.getElementById("name").value.trim();

        // Get the user's email.
        const email = document.getElementById("email").value.trim();

        // Get the user's message.
        const message = document.getElementById("message").value.trim();

        // Check if any field is empty.
        if (name === "" || email === "" || message === "") {

            // Tell the user to complete the form.
            alert("Please complete all the fields.");

        } else {

            // Display a successful message.
            alert("Thank you, " + name + "! Your enquiry has been submitted.");

            // Clear the form.
            enquiryForm.reset();
        }
    });
}

 /*
   Donation Amount Buttons

   This allows the visitor to select a donation amount.
   The selected amount is placed into the amount input.
*/

const amount100 = document.getElementById("amount100");
const amount250 = document.getElementById("amount250");
const amount500 = document.getElementById("amount500");

const regularAmount = document.getElementById("regularAmount");

// Check that the donation elements exist.
if (amount100 && amount250 && amount500 && regularAmount) {

    // Select R100.
    amount100.addEventListener("click", function() {
        regularAmount.value = 100;
    });

    // Select R250.
    amount250.addEventListener("click", function() {
        regularAmount.value = 250;
    });

    // Select R500.
    amount500.addEventListener("click", function() {
        regularAmount.value = 500;
    });
}

 /*
   Donation Interval

   This allows the visitor to select whether
   they want to donate monthly or quarterly.
*/

const monthlyBtn = document.getElementById("monthlyBtn");
const quarterlyBtn = document.getElementById("quarterlyBtn");

// Check if the buttons exist.
if (monthlyBtn && quarterlyBtn) {

    // Runs when Monthly is selected.
    monthlyBtn.addEventListener("click", function() {

        alert("You selected a monthly donation.");

    });

    // Runs when Quarterly is selected.
    quarterlyBtn.addEventListener("click", function() {

        alert("You selected a quarterly donation.");

    });
}

 /*
   Gallery Image Interaction

   This makes the gallery images clickable.

   When an image is clicked, its description
   will be displayed.
*/

const galleryImages = document.querySelectorAll(".gallery-image");

// Go through each gallery image.
galleryImages.forEach(function(image) {

    // Detect when the image is clicked.
    image.addEventListener("click", function() {

        // Display the image description.
        alert(image.alt);

    });
});

 /*
   Volunteer Opportunity Selection

   This detects which volunteering opportunity
   the visitor selects from the dropdown menu.
*/

const opportunity = document.getElementById("opportunity");

// Check if the dropdown exists.
if (opportunity) {

    // Detect when the user selects an option.
    opportunity.addEventListener("change", function() {

        // Check if Education was selected.
        if (opportunity.value === "education") {

            alert("You selected Education opportunities.");

        }

        // Check if Food Distribution was selected.
        else if (opportunity.value === "food") {

            alert("You selected Food Distribution opportunities.");

        }

        // Check if Fundraising was selected.
        else if (opportunity.value === "fundraising") {

            alert("You selected Fundraising opportunities.");

        }

        // Check if Community Support was selected.
        else if (opportunity.value === "community") {

            alert("You selected Community Support opportunities.");

        }

        // Check if Environmental Projects was selected.
        else if (opportunity.value === "environment") {

            alert("You selected Environmental Project opportunities.");

        }

    });
}

 /*
   News Card Interaction

   This makes the news cards interactive.

   When the visitor clicks a news card,
   the "selected" class is added or removed.
*/

const newsCards = document.querySelectorAll(".news-card");

// Go through each news card.
newsCards.forEach(function(card) {

    // Detect when a news card is clicked.
    card.addEventListener("click", function() {

        // Add or remove the selected class.
        card.classList.toggle("selected");

    });

});

// VOLUNTEER FORM

// Gets the volunteer form from the HTML page.
const volunteerForm = document.getElementById("volunteerForm");


// Checks if the volunteer form exists on the page.
if (volunteerForm) {

    // Runs when the user clicks the Submit button.
    volunteerForm.addEventListener("submit", function(event) {

        // Stops the page from refreshing.
        event.preventDefault();


        // Gets the value entered in the location field.
        const location = document.getElementById("location").value;


        // Gets the value selected for distance.
        const distance = document.getElementById("distance").value;


        // Gets the value selected for opportunity type.
        const opportunity = document.getElementById("opportunity").value;


        // Gets the value selected for sub-category.
        const subcategory = document.getElementById("subcategory").value;


        // Gets the paragraph where the message will appear.
        const message = document.getElementById("volunteerMessage");


        // Checks whether any of the fields are empty.
        if (
            location === "" ||
            distance === "" ||
            opportunity === "" ||
            subcategory === ""
        ) {

            // Displays an error message.
            message.textContent =
                "Please complete all the fields before searching.";

            // Changes the message colour.
            message.style.color = "red";

        } else {

            // Displays a successful message.
            message.textContent =
                "Thank you! We are searching for volunteer opportunities near "
                + location + ".";

            // Changes the message colour.
            message.style.color = "#176b2c";
        }

    });

}

// Gets all payment method pictures.
const paymentMethods =
    document.querySelectorAll(".payment-method");

// Stores the selected payment method.
let selectedPayment = "";

// Gets the bank details form.
const bankDetails =
    document.getElementById("bankDetails");

// Runs when a payment logo is clicked.
paymentMethods.forEach(function(payment) {

    payment.addEventListener("click", function() {

        // Gets the name of the selected payment method.
        selectedPayment =
            payment.getAttribute("data-payment");


        // Removes the selection from all logos.
        paymentMethods.forEach(function(method) {

            method.classList.remove("selected-payment");

        });


        // Highlights the selected payment logo.
        payment.classList.add("selected-payment");


        // Shows the bank/payment details form.
        bankDetails.classList.add("show-details");

    });

});


// DONATE BUTTON

// Gets the Donate button.
const donateButton = document.getElementById("donateButton");

// Gets the message area.
const donationMessage = document.getElementById("donationMessage");

// Gets the account holder field.
const accountHolder = document.getElementById("accountHolder");

// Gets the bank name field.
const bankName = document.getElementById("bankName");

// Gets the account number field.
const accountNumber = document.getElementById("accountNumber");

// Gets the payment reference field.
const paymentReference =
    document.getElementById("paymentReference");


// Runs when the Donate button is clicked.
if (donateButton) {

    donateButton.addEventListener("click", function () {

        // Checks if the account holder field is empty.
        if (accountHolder.value.trim() === "") {

            donationMessage.textContent =
                "Please enter the account holder name.";

            donationMessage.style.color = "red";

            accountHolder.focus();

            return;
        }


        // Checks if the bank name field is empty.
        if (bankName.value.trim() === "") {

            donationMessage.textContent =
                "Please enter the bank name.";

            donationMessage.style.color = "red";

            bankName.focus();

            return;
        }


        // Checks if the account number field is empty.
        if (accountNumber.value.trim() === "") {

            donationMessage.textContent =
                "Please enter the account number.";

            donationMessage.style.color = "red";

            accountNumber.focus();

            return;
        }


        // Checks if the payment reference is empty.
        if (paymentReference.value.trim() === "") {

            donationMessage.textContent =
                "Please enter the payment reference.";

            donationMessage.style.color = "red";

            paymentReference.focus();

            return;
        }


        // Displays a success message
        // when all fields have been completed.
        donationMessage.textContent =
            "Thank you! Your donation details have been completed.";

        donationMessage.style.color = "#176b2c";

    });
}

lightbox.option({
    'resizeDuration': 200,
    'fadeDuration' : 300,
    'wrapAround' : true
});
