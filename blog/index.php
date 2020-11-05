<?php
error_reporting(0);

//import database connection
require_once("../action_scripts/pdoconnection.php");

//connect to database
$pdoconn = dbconnect();

//get article id from url set by .htccess
$slugUri = $_GET['id'];
$getid_part = explode('-', $slugUri);
$id_partOfURL = $getid_part[0];
if(is_numeric($id_partOfURL) || $id_partOfURL == 'list'){

	//number of article to display
	//article with id 1 in db is default to list all articles
	//the more articles database query randomized the selection
	$numOfArticles = "20";

	//fetch data from blogs table
	$getBlogs = $pdoconn->prepare("SELECT * FROM blogs WHERE uniqueID =? LIMIT 1");
	$getBlogs->execute([$id_partOfURL]);
	if($getBlogs->rowCount() >0){
		$blog = $getBlogs->fetch(PDO::FETCH_OBJ);
		$articleUniqueID = $blog->uniqueID;
		$authorFK = $blog->authorFK;
		$title = $blog->title;
		$full_HTML_article_body = $blog->content;
		$reviewedByFK = $blog->reviewedByFK;
		$create_datetime = date_create($blog->create_datetime);
		$lastupdate_datetime = date_create($blog->lastupdate_datetime);

		//fetch author from authors table
		$getauthor = $pdoconn->prepare("SELECT * FROM authors WHERE uniqueID =? LIMIT 1");
		$getauthor->execute([$authorFK]);
		$getauthor = $getauthor->fetch(PDO::FETCH_OBJ);
		$authorName = $getauthor->author_firstname." ".$getauthor->author_surname;
		$authorBio = $getauthor->author_bio;

		//fetch reviewedBy from authors table
		$getauthor = $pdoconn->prepare("SELECT * FROM authors WHERE uniqueID =? LIMIT 1");
		$getauthor->execute([$reviewedByFK]);
		$getauthor = $getauthor->fetch(PDO::FETCH_OBJ);
		$reviewedBy = $getauthor->author_firstname." ".$getauthor->author_surname;

		//slugify the article url and make it sticky
		$safeArticleUri = $articleUniqueID."-".strtolower(str_replace(' ', '-', $title));
		if(strcasecmp($safeArticleUri,$slugUri)!==0){
		$artcleSlug = strtolower($safeArticleUri);
		}else{
		$artcleSlug = strtolower($slugUri);
		}

	}

}else{
	header("Location: ../404.html", true, 301);
	exit;
}

//include the header
require_once("blog_header.php"); 
?>

    <!-- Page content -->
<div id="primary" class="no-padding content-area no-sidebar">
<div class="container">
<div class="row">
<main id="main" class="col-md-12 site-main main-content">
             
<article id="post-1094" class="post-1094 page type-page status-publish hentry">

<div class="entry-content">

<div class="vc_row wpb_row vc_row-fluid vc_custom_1542127766367"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner">


<?php 
//display article body for reading if id is greater than 0
if($slugUri >0){

//number of article to display
$numOfArticles = "8";
?>
<div class="wpb_wrapper article_container">
<div class="title-subtile-holder text-center">

<div id="article-meta_1-0" class="comp not-news article-meta mntl-block" data-tracking-container="true">
<div id="article-meta__wrapper_1-0" class="comp article-meta__wrapper mntl-block">

<!-- Blog AUTHOR information -->
	<div id="byline-article-reviewed-by_1-0" class="comp no-review-date byline-article-reviewed-by article-reviewed-byline mntl-block">
	<div id="medical-review-byline_1-0" class="comp medical-review-byline mntl-review-byline mntl-block">
	<span id="mntl-review-byline__text_2-0" class="comp mntl-review-byline__text mntl-text-block">
	Written By</span>
	<div id="mntl-review-byline__link-wrapper_2-0" class="comp mntl-review-byline__link-wrapper mntl-block mntl-dynamic-tooltip--trigger" data-tooltip="" data-tooltip-position-x="left" data-tooltip-position-y="bottom">
	<a href="#" id="mntl-review-byline__link_2-0" class=" mntl-review-byline__link mntl-text-link" data-tracking-container="true"><span class="link__wrapper">

	<?php echo $authorName; ?>

	</span></a>
	<!-- author more info drop down part -->
		<div id="mntl-dynamic-tooltip" class="mntl-dynamic-tooltip" data-tracking-container="true"><div id="mntl-bio-tooltip_3-0" class="comp mntl-bio-tooltip review-tooltip bio-tooltip mntl-block mntl-dynamic-tooltip--content">
		<div id="mntl-bio-tooltip__top_3-0" class="comp mntl-bio-tooltip__top mntl-block">
		<div id="mntl-bio-tooltip__image-wrapper_3-0" class="comp mntl-bio-tooltip__image-wrapper mntl-block" data-defer="load" data-defer-params=""></div>
		<div id="mntl-bio-tooltip__info_3-0" class="comp mntl-bio-tooltip__info mntl-block">
		<div id="mntl-bio-tooltip__name_3-0" class="comp mntl-bio-tooltip__name mntl-block">
		<span id="mntl-bio-tooltip__prelink_3-0" class="comp mntl-bio-tooltip__prelink mntl-text-block">
		Written by </span>
		<a href="#" id="mntl-bio-tooltip__link_3-0" class=" mntl-bio-tooltip__link mntl-text-link" data-tracking-container="true"><span class="link__wrapper">

		<?php echo $authorName;  ?>

		</span></a>
		<span id="mntl-bio-tooltip__postlink_3-0" class="comp mntl-bio-tooltip__postlink mntl-text-block">

		<?php echo date_format($create_datetime, '\o\n l jS F Y \a\t g:ia');  ?>

		</span>
		</div>
		</div>
		</div>
		<div id="mntl-bio-tooltip__bottom_3-0" class="comp mntl-bio-tooltip__bottom mntl-block">
		<div id="mntl-bio-tooltip__bio_3-0" class="comp mntl-bio-tooltip__bio mntl-text-block">
		<p>
		<?php echo $authorBio;  ?>
		</p></div>
		<div id="mntl-bio-tooltip__learn-more_3-0" class="comp mntl-bio-tooltip__learn-more mntl-block">
		<span id="mntl-text-block_7-0" class="comp mntl-text-block">
		Learn more </span>
		<a target="_blank" href="https://www.andrew-godwin.com/" id="mntl-text-link_3-0" class=" mntl-text-link" data-tracking-container="true"><span class="link__wrapper">About this website</span></a>
		</div>
		</div>
		</div></div>
	</div>
	</div>
	</div>

<!-- Blog AUTHOR Reviwer information -->
	<div id="byline-article-reviewed-by_1-0" class="comp no-review-date byline-article-reviewed-by article-reviewed-byline mntl-block">
	<div id="medical-review-byline_1-0" class="comp medical-review-byline mntl-review-byline mntl-block">
	<span id="mntl-review-byline__text_2-0" class="comp mntl-review-byline__text mntl-text-block">
	Reviewed By</span>
	<div id="mntl-review-byline__link-wrapper_2-0" class="comp mntl-review-byline__link-wrapper mntl-block mntl-dynamic-tooltip--trigger" data-tooltip="" data-tooltip-position-x="left" data-tooltip-position-y="bottom">
	<a href="#" id="mntl-review-byline__link_2-0" class=" mntl-review-byline__link mntl-text-link" data-tracking-container="true"><span class="link__wrapper">

	<?php echo $reviewedBy; ?>

	</span></a>
	<!-- author more info drop down part -->
		<div id="mntl-dynamic-tooltip" class="mntl-dynamic-tooltip" data-tracking-container="true"><div id="mntl-bio-tooltip_3-0" class="comp mntl-bio-tooltip review-tooltip bio-tooltip mntl-block mntl-dynamic-tooltip--content">
		<div id="mntl-bio-tooltip__top_3-0" class="comp mntl-bio-tooltip__top mntl-block">
		<div id="mntl-bio-tooltip__image-wrapper_3-0" class="comp mntl-bio-tooltip__image-wrapper mntl-block" data-defer="load" data-defer-params=""></div>
		<div id="mntl-bio-tooltip__info_3-0" class="comp mntl-bio-tooltip__info mntl-block">
		<div id="mntl-bio-tooltip__name_3-0" class="comp mntl-bio-tooltip__name mntl-block">
		<span id="mntl-bio-tooltip__prelink_3-0" class="comp mntl-bio-tooltip__prelink mntl-text-block">
		Reviewed by </span>
		<a href="#" id="mntl-bio-tooltip__link_3-0" class=" mntl-bio-tooltip__link mntl-text-link" data-tracking-container="true"><span class="link__wrapper">

		<?php echo $reviewedBy;  ?>

		</span></a>
		<span id="mntl-bio-tooltip__postlink_3-0" class="comp mntl-bio-tooltip__postlink mntl-text-block">

		<?php echo date_format($create_datetime, '\o\n l jS F Y \a\t g:ia');  ?>

		</span>
		</div>
		</div>
		</div>
		<div id="mntl-bio-tooltip__bottom_3-0" class="comp mntl-bio-tooltip__bottom mntl-block">
		<div id="mntl-bio-tooltip__bio_3-0" class="comp mntl-bio-tooltip__bio mntl-text-block">
		<p>
		<?php echo $authorBio;  ?>
		</p></div>
		<div id="mntl-bio-tooltip__learn-more_3-0" class="comp mntl-bio-tooltip__learn-more mntl-block">
		<span id="mntl-text-block_7-0" class="comp mntl-text-block">
		Learn more </span>
		<a target="_blank" href="https://www.andrew-godwin.com/" id="mntl-text-link_3-0" class=" mntl-text-link" data-tracking-container="true"><span class="link__wrapper">About this website</span></a>
		</div>
		</div>
		</div></div>
	</div>
	</div>
	</div>

<span id="byline-article-updated_1-0" class="comp byline-article-updated mntl-text-block">
Last Update: <?php echo date_format($lastupdate_datetime, '\o\n l jS F Y \a\t g:ia'); ?></span>
</div>
</div>








<div class="vc_row wpb_row vc_row-fluid vc_custom_1542127823574">

<div class="wpb_column vc_column_container vc_col-sm-6" style="width:65%;margin-left: 40px;">

<h2 class=""><?php echo $title; ?></h2>
<div id="article_body">
<div class="article_bg">
<?php echo $full_HTML_article_body; ?>
</div>

<div class="">
	<ul class="">
		<li class="">
		<a onClick="window.open('https://www.facebook.com/sharer.php?u=https://www.andrew-godwin.com/blog/<?php echo urlencode($artcleSlug);?>','sharer','toolbar=0,status=0,width=548,height=325');" href="javascript: void(0)" rel="nofollow" class="a__share_fb" data-network="facebook">
		<img src="../engine_room/images/share_facebook.png" />
		</a>
		</li>
		<li class="">
		<a href="https://twitter.com/intent/tweet?original_referer=https://www.andrew-godwin.com/blog/<?php echo $artcleSlug;?>&amp;text=<?php echo $title;?>&amp;tw_p=tweetbutton&amp;url=https://www.andrew-godwin.com/blog/<?php echo $artcleSlug;?>&amp;via=andrew-godwin.com" target="_blank" rel="nofollow" class="a__share_tw" data-network="twitter">
		<img src="../engine_room/images/share_tweeter.png" />
		</a>
		</li>
		<li class="">
		<a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.andrew-godwin.com/blog/<?php echo $artcleSlug;?>&amp;title=<?php echo $title;?>&amp;summary=<?php echo $title;?>&amp;source=andrew-godwin.com" target="_blank" rel="nofollow" class="a__share_tw" data-network="twitter">
		<img src="../engine_room/images/share_linkedin.png" />
		</a>
		</li>
		<li class="">
		<a href="mailto:?subject=<?php echo $title;?>&amp;body=https://www.andrew-godwin.com/blog/<?php echo $artcleSlug;?>" title="Send this article to a friend!" class="a__share_e" data-network="email">
		<img src="../engine_room/images/share_email.png" />
		</a>
		</li>
	</ul>
</div>
</div>
</div>



<div class="wpb_column vc_column_container vc_col-sm-1" style="width: auto;">
<h6 class="" >Advertisement</h6>
<div class="ads">
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- 300 x 250 Medium Rectangle flightstime -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-1964328650906507"
     data-ad-slot="2562836093"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>

<h6 class="" >Advertisement</h6>
<div class="ads">
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- 300 x 250 Medium Rectangle flightstime -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-1964328650906507"
     data-ad-slot="2562836093"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>

<h6 class="" >Advertisement</h6>
<div class="ads">
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- 300 x 250 Medium Rectangle flightstime -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-1964328650906507"
     data-ad-slot="2562836093"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>



</div>
</div>
</div>


</div>
<?php } ?>

<!-- more articles section -->
<section id="related-article-list_2-0" class="comp related-article-list article-list" data-tracking-container="true">
<span class="section-title">More Articles</span>
<div class="loc content section-body">
<ul id="block-list_2-0" class="comp g g-four-up block-list" data-chunk="">

<!-- list more articles with a php loop -->
<?php
//get more articles from database
//fetch data from blogs table
$getMoreArticles = $pdoconn->prepare("SELECT * FROM blogs WHERE uniqueID >? ORDER BY rand() LIMIT $numOfArticles");
$getMoreArticles->execute([0]);

while($moreArticles = $getMoreArticles->fetch(PDO::FETCH_OBJ)){
$uniqueID = $moreArticles->uniqueID;
$authorFK = $moreArticles->authorFK;
$article_category = $moreArticles->category;
$title = $moreArticles->title;
$article_image_URL = $moreArticles->article_image_URL;

//clean article slug
$clean = $uniqueID."-".strtolower(str_replace(' ', '-', $title));
// Replace non-AlNum characters with space
$clean = preg_replace('/[^A-Za-z0-9]/', ' ', $clean);
// Replace Multiple spaces with single space
$clean = preg_replace('/ +/', '-', $clean);
// Trim the string of leading/trailing space
$safeArticleUri = trim($clean);

//fetch author from authors table
$getauthor = $pdoconn->prepare("SELECT * FROM authors WHERE uniqueID =? LIMIT 1");
$getauthor->execute([$authorFK]);
$author = $getauthor->fetch(PDO::FETCH_OBJ);
$authorName = $author->author_firstname." ".$author->author_surname;

echo
	"<li class='g-item block-list-item'>
	<a id='block_2-0' class='comp block--small block' rel='' data-doc-id='5082136' href='".$safeArticleUri."' data-ordinal='1'>
	<div class='block__media'>
	<div class='img-placeholder' style='padding-bottom:62.5%;'>
	<img src='../engine_room/images/blog_images/".$article_image_URL."' data-placeholder='default' alt='image' class='block__img lazyloaded' data-expand='300'>
	</div> </div>
	<div class='block__content' data-kicker='".$article_category."'>
	<div class='block__title'>
	<span>".$title."</span>
	</div>
	<div class='block__byline'> By ".$authorName."
	</div>
	</div>
	</a>
	</li>";
}
?>
<!-- list more articles with a php loop -->
</ul>
</div>
</section>
</div></div></div>




</div><!-- .entry-content -->
</article><!-- #post-## -->
</main>
</div>
</div>
</div>


<!-- Join Footer -->
<?php require_once("blog_footer.php"); ?>