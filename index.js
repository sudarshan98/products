let btn=document.getElementById("btn")
// console.log(btn);

function onOpenHandler () {
  alert('Payments Modal is Opened');
}

function onCloseHandler () {
  alert('Payments Modal is Closed');
}

function onPaymentSuccessHandler (response) {
  alert('Payment Success');
  console.log('Payment Success Response', response);
}

function onPaymentFailureHandler (response) {
  alert('Payment Failure');
  console.log('Payment Failure Response', response);
}
/* End client-defined Callback Handler Functions */

/* Configuring Handlers */
Instamojo.configure({
  handlers: {
    onOpen: onOpenHandler,
    onClose: onCloseHandler,
    onSuccess: onPaymentSuccessHandler,
    onFailure: onPaymentFailureHandler
  }
});





function Button() {
        Instamojo.open('http://www.instamojo.com/@ayushya');
        console.log("hello")
      }