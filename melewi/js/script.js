
$(function() {
    $('#contact').validate({
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
                        console.log('sent!!');
                    });

                    $('#contact').each(function(){
                        this.reset();   //Here form fields will be cleared.
                    });

                    $('#contact :submit').addClass('submit').prop('value', 'Sent!');

                    setTimeout(function() {
                        $('#contact :submit').removeClass('submit').prop('value', 'Send!');
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
