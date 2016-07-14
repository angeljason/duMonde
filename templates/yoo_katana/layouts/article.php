<?php if ($this['config']->get('article')=='tm-article-blog') : ?>
	<article class="uk-article" <?php if ($permalink) echo 'data-permalink="'.$permalink.'"'; ?>>

		<?php if ($image && $image_alignment == 'none') : ?>
			<?php if ($url) : ?>
				<div class="tm-blog-image" style="background:url(<?php echo $image; ?>);">
					<?php if ($more) : ?>
						<a class="tm-blog-more uk-button uk-button-primary uk-button-large uk-text-truncate" href="<?php echo $url; ?>" title="<?php echo $title; ?>"><?php echo $more; ?></a>
					<?php endif; ?>
				</div>
			<?php else : ?>
				<div class="tm-blog-image-single-view" style="background:url(<?php echo $image; ?>);"></div>
			<?php endif; ?>
		<?php endif; ?>

		<?php if (empty($url)) : ?>
		<div class="uk-container uk-container-center uk-margin-large">
		<?php endif; ?>

		<?php echo $hook_aftertitle; ?>

		<?php if ($author || $date || $category) : ?>
		<p class="uk-article-meta uk-text-small">

			<?php

				$date     = ($date) ? ($datetime ? '<time datetime="'.$datetime.'">'.JHtml::_('date', $date, JText::_('DATE_FORMAT_LC3')).'</time>' : JHtml::_('date', $date, JText::_('DATE_FORMAT_LC3'))) : '';
				$category = ($category && $category_url) ? '<a href="'.$category_url.'">'.$category.'</a>' : $category;

				if($date) {
					printf(JText::_('TPL_WARP_META_DATE'), $date);
				}

				if ($category) {
					echo ' ';
					printf(JText::_('TPL_WARP_META_CATEGORY'), $category);
				}

			?>

		</p>
		<?php endif; ?>

		<?php if ($title) : ?>
		<h2 class="uk-article-title">
			<?php if ($url && $title_link) : ?>
				<a href="<?php echo $url; ?>" title="<?php echo $title; ?>"><?php echo $title; ?></a>
			<?php else : ?>
				<?php echo $title; ?>
			<?php endif; ?>
		</h2>
		<?php endif; ?>

		<?php if ($image && $image_alignment != 'none') : ?>
			<?php if ($url) : ?>
				<a class="uk-align-<?php echo $image_alignment; ?>" href="<?php echo $url; ?>" title="<?php echo $image_caption; ?>"><img src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>"></a>
			<?php else : ?>
				<img class="uk-align-<?php echo $image_alignment; ?>" src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>">
			<?php endif; ?>
		<?php endif; ?>

		<?php echo $hook_beforearticle; ?>

		<?php if ($article) : ?>
		<div>
			<?php echo $article; ?>
		</div>
		<?php endif; ?>

		<?php if ($tags) : ?>
		<p><?php echo JText::_('TPL_WARP_TAGS').': '.$tags; ?></p>
		<?php endif; ?>

		<?php if ($edit) : ?>
		<p><?php echo $edit; ?></p>
		<?php endif; ?>

		<?php if ($previous || $next) : ?>
        <ul class="uk-pagination">
            <?php if ($previous) : ?>
            <li class="uk-pagination-previous">
                <a href="<?php echo $previous; ?>" title="<?php echo JText::_('JPREV') ?>">
                    <i class="uk-icon-arrow-left"></i>
                    <?php echo JText::_('JPREV') ?>
                </a>
            </li>
            <?php endif; ?>

            <?php if ($next) : ?>
            <li class="uk-pagination-next">
                <a href="<?php echo $next; ?>" title="<?php echo JText::_('JNEXT') ?>">
                    <?php echo JText::_('JNEXT') ?>
                    <i class="uk-icon-arrow-right"></i>
                </a>
            </li>
            <?php endif; ?>
        </ul>
        <?php endif; ?>

		<?php echo $hook_afterarticle; ?>

		<?php if (!$url) : ?>
		</div>
		<?php endif; ?>

	</article>

<?php else : ?>

	<article class="uk-article" <?php if ($permalink) echo 'data-permalink="'.$permalink.'"'; ?>>

	<?php if ($image && $image_alignment == 'none') : ?>
		<?php if ($url) : ?>
			<a href="<?php echo $url; ?>" title="<?php echo $image_caption; ?>"><img src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>"></a>
		<?php else : ?>
			<img src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>">
		<?php endif; ?>
	<?php endif; ?>

	<?php if ($title) : ?>
	<h1 class="uk-article-title">
		<?php if ($url && $title_link) : ?>
			<a href="<?php echo $url; ?>" title="<?php echo $title; ?>"><?php echo $title; ?></a>
		<?php else : ?>
			<?php echo $title; ?>
		<?php endif; ?>
	</h1>
	<?php endif; ?>

	<?php echo $hook_aftertitle; ?>

	<?php if ($author || $date || $category) : ?>
	<p class="uk-article-meta">

		<?php

			$author   = ($author && $author_url) ? '<a href="'.$author_url.'">'.$author.'</a>' : $author;
			$date     = ($date) ? ($datetime ? '<time datetime="'.$datetime.'" pubdate>'.JHtml::_('date', $date, JText::_('DATE_FORMAT_LC3')).'</time>' : JHtml::_('date', $date, JText::_('DATE_FORMAT_LC3'))) : '';
			$category = ($category && $category_url) ? '<a href="'.$category_url.'">'.$category.'</a>' : $category;

			if($author && $date) {
				printf(JText::_('TPL_WARP_META_AUTHOR_DATE'), $author, $date);
			} elseif ($author) {
				printf(JText::_('TPL_WARP_META_AUTHOR'), $author);
			} elseif ($date) {
				printf(JText::_('TPL_WARP_META_DATE'), $date);
			}

			if ($category) {
				echo ' ';
				printf(JText::_('TPL_WARP_META_CATEGORY'), $category);
			}

		?>

	</p>
	<?php endif; ?>

	<?php if ($image && $image_alignment != 'none') : ?>
		<?php if ($url) : ?>
			<a class="uk-align-<?php echo $image_alignment; ?>" href="<?php echo $url; ?>" title="<?php echo $image_caption; ?>"><img src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>"></a>
		<?php else : ?>
			<img class="uk-align-<?php echo $image_alignment; ?>" src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>">
		<?php endif; ?>
	<?php endif; ?>

	<?php echo $hook_beforearticle; ?>

	<?php if ($article) : ?>
	<div>
		<?php echo $article; ?>
	</div>
	<?php endif; ?>

	<?php if ($tags) : ?>
	<p><?php echo JText::_('TPL_WARP_TAGS').': '.$tags; ?></p>
	<?php endif; ?>

	<?php if ($more) : ?>
	<p>
		<a href="<?php echo $url; ?>" title="<?php echo $title; ?>"><?php echo $more; ?></a>
	</p>
	<?php endif; ?>

	<?php if ($edit) : ?>
	<p><?php echo $edit; ?></p>
	<?php endif; ?>

	<?php if ($previous || $next) : ?>
    <ul class="uk-pagination">
        <?php if ($previous) : ?>
        <li class="uk-pagination-previous">
            <a href="<?php echo $previous; ?>" title="<?php echo JText::_('JPREV') ?>">
                <i class="uk-icon-arrow-left"></i>
                <?php echo JText::_('JPREV') ?>
            </a>
        </li>
        <?php endif; ?>

        <?php if ($next) : ?>
        <li class="uk-pagination-next">
            <a href="<?php echo $next; ?>" title="<?php echo JText::_('JNEXT') ?>">
                <?php echo JText::_('JNEXT') ?>
                <i class="uk-icon-arrow-right"></i>
            </a>
        </li>
        <?php endif; ?>
    </ul>
    <?php endif; ?>

	<?php echo $hook_afterarticle; ?>

</article>



<?php endif; ?>