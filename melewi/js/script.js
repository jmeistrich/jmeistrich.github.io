
$(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            answer: {
                required: false,
                answercheck: true
            }
        },
        messages: {
            name: {
                required: "Please input your name",
                minlength: "Name should be at least 2 characters"
            },
            email: {
                required: "E-mail address required",
                email: "Enter valid email address"
            },
            message: {
                required: "Please enter a message",
                minlength: "A longer message is required"
            },
            answer: {
                required: "Sorry, wrong answer!"
            }
        },
        submitHandler: function(form) {
            debugger;
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process.php",
                success: function() {
                    $('#contact :input').attr('enabled', 'enabled');
                    $('#contact').fadeIn( "slow", 0.15, function() {
                        $(this).find(':input').attr('enabled', 'enabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn(1000).delay(1500).fadeOut(1000);
                        console.log('sent!!')
                    });

                    $('#contact').each(function(){
                        this.reset();   //Here form fields will be cleared.
                    });

                    $('#contact :submit').addClass('submit').prop('value', 'Sent!');

                    setTimeout(function() {
                        $('#contact :submit').removeClass('submit').prop('value', 'Send Message');
                    }, 4000);

                },

                error: function() {
                    $('#contact :input').attr('enabled', 'enabled');
                    $('#contact').fadeIn( "slow", 0.15, function() {
                        $(this).find(':input').attr('enabled', 'enabled');
                        $(this).find('label').css('cursor','default');
                        $('#error').fadeIn(1000).delay(1500).fadeOut(1000);
                    });

                    $('#contact').each(function(){
                        this.reset();   //Here form fields will be cleared.
                    });
                }
            });
        }
    });
});


$(function() {
    $('#postcard-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: false
            },
            address: {
                required: true
            },
            zip: {
                required: true
            },
            country: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: false
            },
            answer: {
                required: false,
                answercheck: true
            }
        },
        messages: {
            name: {
                required: "Please input your name</em>",
                minlength: "Name should be at least 2 characters"
            },
            email: {
                required: "E-mail address Required",
                email: "Enter valid email address "
            },
            address: {
                required: "Address required"
            },
            country: {
                required: "Country required"
            },
            city: {
                required: "City required"
            },
            zip: {
                required: "Zip required"
            },
            message: {
                required: "Message required",
                minlength: "A longer message is required"
            },
            answer: {
                required: "Sorry, wrong answer!"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"postcardform.php",
                success: function() {
                    $('#postcard-form :input').attr('enabled', 'enabled');
                    $('#postcard-form').fadeIn( "slow", 0.15, function() {
                        $(this).find(':input').attr('enabled', 'enabled');
                        $(this).find('label').css('cursor','default');
                        $('#success2').fadeIn(1000).delay(2000).fadeOut(2000);
                        console.log('boo');
                    });

                    $('#postcard-form').each(function(){
                        this.reset();
                    });
                    $('#postcard-form :submit').addClass('submit').prop('value', 'Sent!');
                     console.log('sent')

                    setTimeout(function() {
                       $('#postcard-form :submit').removeClass('submit').prop('value', 'Send Me A Post Card');
                         console.log('send me a postcard again')
                        isClicked = 1;
                    }, 3000);




                },

                error: function() {
                    $('#postcard-form :input').attr('enabled', 'enabled');

                    $('#postcard-form').fadeIn( "slow", 0.15, function() {
                        $(this).find(':input').attr('enabled', 'enabled');
                        $(this).find('label').css('cursor','default');
                        $('#error2').fadeIn(1000).delay(2000).fadeOut(2000);
                    });

                    $('#postcard-form').each(function(){
                        this.reset();   //Here form fields will be cleared.
                    });
                }
            });
        }
    });
});
