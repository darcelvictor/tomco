<?php get_header();
/*
Template Name: contact
*/
?> 
    <section id="contact">
    <a class="anchor" id="contactAnchor"></a>
    <h1><?php the_field('contact_title');?></h1>
    <?php echo do_shortcode( '[wpforms id="175" title="false" description="false"]' ); ?>
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/noun_company_2469051.svg" alt="building">
    <a href="<?php the_field('google_link_adress');?>" id="adress">
            <p><?php the_field('street');?><br><?php the_field('city');?></p>
    </a>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10497.462074336241!2d2.2898264369873043!3d48.870308154370626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e597cdd3fcd2f0b!2sToMCo!5e0!3m2!1sfr!2sfr!4v1571676535949!5m2!1sfr!2sfr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="false"></iframe>
<?php get_footer();?>
