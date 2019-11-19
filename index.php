<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800i,900i|Neuton:400,400i,700,800|Noto+Sans:400,700&display=swap" rel="stylesheet">
    <link href="style.min.css" rel="stylesheet">
    <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"
    ></script>
    <script src="./js/main.js"></script>
    <title>Glen Davis Electric</title>
</head>
<body onscroll="scrollNum()">
    <div class="container">
        <div class="banner-div">
            <?php 
                // require_once(plugin_dir_path(__FILE__) . '/assets/banner.php');
                require_once('./assets/landing-banner.php');
            ?>
        </div>
        <!-- Nav bar -->
            <?php 
                require_once('./assets/nav.php');
            ?>
        <!-- Banner Text -->
            <?php 
                require_once('./assets/landing-banner-text.php');
            ?>
        <section class="landing-services">
            <!-- dynamically loaded services go here -->
            <!-- maybe 3? -->
            <div class="landing-service-card">
                <!-- title - sub-title - comments - image -->
            </div>
            <div class="landing-service-card">
                
            </div>
            <div class="landing-service-card">
                
            </div>
        </section>
        <section class="blog-section">

        </section>
        <footer>
            
        </footer>
    </div>
</body>
</html>