const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/replace-with-your-payment-link";

const paymentLinks = document.querySelectorAll("[data-stripe-link]");
const hasLiveStripeLink = !STRIPE_PAYMENT_LINK.includes("replace-with-your-payment-link");

paymentLinks.forEach((link) => {
  link.href = hasLiveStripeLink ? STRIPE_PAYMENT_LINK : "#payment";
  link.target = hasLiveStripeLink ? "_blank" : "";

  if (!hasLiveStripeLink) {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#payment") return;
      event.preventDefault();
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
