<?php get_header();?>
    <section id="particles-js">
    <div class="headerContent">
       <h1><?php the_field('slogan');?></h1>
        <a class="Bttn grBttn" href="<?php the_field('lien_du_bouton_call_to_action');?>">
            <?php the_field('bouton_call_to_action');?>
        </a>
    </div>
    </section>
    <section id="companyPresentation">
        <h2><?php the_field('introduction_title');?></h2>
        <div class="content">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/<?php the_field('youtubeCode');?>"
            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/<?php the_field('youtubeCode');?>?autoplay=1><img src=https://img.youtube.com/vi/<?php the_field('youtubeCode');?>/hqdefault.jpg alt='TOMCO - Bruno Fontaine - Stratégie Numérique'><span>▶</span></a>"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition"
            ></iframe>
            <p><?php the_field('presentation_txt');?></p>
        </div>
    </section>
    <section id="number">
    <h2><?php the_field('title_in_a_few_figures');?></h2>
    <div class="content">
        <div class="chart-container" style="position: relative;">
            <canvas id="myChart1" class="chart" data-values="<?php the_field('firstDunoughtValues');?>" data-text="<?php the_field('first_dunought_txt');?>"></canvas>
        </div>
        <div class="chart-container" style="position: relative;">
        <canvas id="myChart2" class="chart" data-values="<?php the_field('secondDunoughtValues');?>" data-text="<?php the_field('second_dunought_txt');?>"></canvas>
        </div>
        <div class="chart-container" style="position: relative;">
        <canvas id="myChart3" class="chart" data-values="<?php the_field('thirdDunoughtValues');?>" data-text="<?php the_field('third_dunought_txt');?>"></canvas>
        </div>
    </div>
    </section>

     <!-- team -->
    <section id="team">
    <h2><?php the_field('titre_presentation_associes');?></h2>
    <div class="content">
            <div class="partner" id="partner1">
                <?php 
                    $image = get_field('first_associate_image');
                    if( !empty( $image ) ): ?>
                        <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                <?php endif; ?>
                <p class="first_name"><?php the_field('first_associate_name');?></p>
                <p class="last_name"><?php the_field('first_associate_last_name');?></p>
            </div>
            <div class="partner"  id="partner2">
                <?php 
                    $image = get_field('seconde_associate_image');
                    if( !empty( $image ) ): ?>
                        <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                <?php endif; ?>
                <p class="first_name"><?php the_field('second_associate_name');?></p>
                <p class="last_name"><?php the_field('second_associate_last_name');?></p>
            </div>
            <div class="partner"  id="partner2">
                <?php 
                    $image = get_field('third_associate_image');
                    if( !empty( $image ) ): ?>
                        <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                <?php endif; ?>
                <p class="first_name"><?php the_field('third_associate_name');?></p>
                <p class="last_name"><?php the_field('third_associate_last_name');?></p>
            </div>
    </div>
    <div id="teamBttn">
        <a class="Bttn grBttn" href="<?php the_field('team_bttn_link');?>">
            <?php the_field('team_bttn');?>
        </a>
    </div>
    </section>

    <!-- testimonial -->
    <section id="testimonial">
        <h2><?php the_field('testimonial_title');?></h2>
        <?php 
        $args = array( 'post_type' => 'testimonial', 'posts_per_page' => 3 );
        $the_query = new WP_Query( $args ); 
        ?>
        <?php if ( $the_query->have_posts() ) : ?>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                        <div class="swiper-slide">
                        <?php 
                        $image = get_field('company_image');
                        if( !empty( $image ) ): ?>
                            <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                        <?php endif; ?>
                        <div class="author">
                            <p class="name"><?php the_field('name'); ?> <?php the_field('last_name'); ?></p>
                            <p class="job"><?php the_field('post'); ?></p>
                        </div>
                        <div id="border"></div>
                        <p class="texte">« <?php the_field('texte'); ?> »</p>
                        </div>
                    <?php endwhile; ?>
                </div>
            <?php wp_reset_postdata(); ?>
            <?php else:  ?>
            <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>
        <div class="swiper-pagination"></div>
        </div>
    </section>
    <section id="contact">
    <a class="anchor" id="contactAnchor"></a>
    <h2><?php the_field('contact_title');?></h2>
    <?php echo do_shortcode( '[wpforms id="175" title="false" description="false"]' ); ?>
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/noun_company_2469051.svg" alt="building">
    <a href="<?php the_field('google_link_adress');?>" id="adress">
            <p><?php the_field('street');?><br><?php the_field('city');?></p>
    </a>

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10497.462074336241!2d2.2898264369873043!3d48.870308154370626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e597cdd3fcd2f0b!2sToMCo!5e0!3m2!1sfr!2sfr!4v1571676535949!5m2!1sfr!2sfr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="false"></iframe>
    </section>
<?php get_footer();?>
