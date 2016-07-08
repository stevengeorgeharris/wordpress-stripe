**Wordpress + Stripe**

The following was set up to demonstrate stripe payments in WordPress.

We are using the wp-stripe plugin. 
I have modified the core of the plugin to allow us to add multiple steps before checkout.

Please enter your Stripe API keys.

Example form: 

``[stripe billing="true"]
 
 [stripe_wrap class="first"]
 [stripe_amount default="5" placeholder="Donation Amount"]
 [/stripe_wrap]
 
 [stripe_wrap class="second"]
 
 [stripe_dropdown label="I wish to make a donation towards" options="Red,Green,Blue"]
 
 [/stripe_wrap]
 
 [stripe_wrap class="third"]
 <p>If you are a UK taxpayer, the charity can reclaim 25p for every £1 if you declare your donation as Gift Aid. By selecting 'With Gift Aid', you agree to the Gift Aid Declaration.</p>
 [stripe_checkbox label="Add Gift Aid" id="gift_aid" required="false"]
 [/stripe_wrap]
 
 [/stripe]``