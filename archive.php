<?php get_header();
/*
Template Name: archive
*/
?> 
   <section id="contentPage">
	   <?php include 'template-content-archive.php';?>
	</section>
    <section id="arhiveContent">
		<?php if ( have_posts() ) : ?>
        <ul>
            <?php
                $recentPosts = new WP_Query();
                $recentPosts->query('showposts=5');
            ?>
            <?php while ($recentPosts->have_posts()) : $recentPosts->the_post(); ?>
                <li>
                    <h3><?php the_title(); ?> </h3>
                    <p class="category"><?php the_category($separator =' <i class="fas fa-circle"></i> ')?></p>
                    <p class="excerpt"><?php the_excerpt(); ?></p>
                    <a href="<?php the_permalink() ?>" rel="bookmark">lien</a>
                </li>
            <?php endwhile; ?>
        </ul>
        <?php
            else :
                get_template_part( 'template-parts/content', 'none' );
            endif;
        ?>
    </section>
<?php get_footer();?>
