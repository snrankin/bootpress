<!-- Navs  -->
<div class="container-fluid example-container" data-category="navs">
    <h1>Navs</h1>

    <h3>Default nav</h3>

    <div class="mt-3 mb-5">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0);">HTML</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">CSS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">JavaScript</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">Preview</a>
            </li>
        </ul>
    </div>

    <h3>Horizontal menu</h3>
    <div class="mt-3 mb-5">
        <nav class="nav flex-column">
            <a class="nav-link active" href="javascript:void(0);">HTML</a>
            <a class="nav-link" href="javascript:void(0);">CSS</a>
            <a class="nav-link" href="javascript:void(0);">JavaScript</a>
            <a class="nav-link" href="javascript:void(0);">Preview</a>
        </nav>
    </div>

    <h3>Nav with tabs</h3>
    <div class="mt-3 mb-5">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0);">HTML</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">CSS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">JavaScript</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">Preview</a>
            </li>
        </ul>
    </div>

    <h3>Nav with pills</h3>
    <div class="mt-3 mb-5">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0);">HTML</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">CSS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">JavaScript</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">Preview</a>
            </li>
        </ul>
    </div>

    <h3>Horizontal nav with pills</h3>
    <div class="mt-3 mb-5">
        <ul class="nav nav-pills flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0);">HTML</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">CSS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">JavaScript</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);">Preview</a>
            </li>
        </ul>
    </div>

    <h3>Nav with tabs and dropdown</h3>
    <div class="mt-3 mb-5">
        <ul id="clothing-nav" class="nav nav-tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#hats" role="tab" id="hats-tab" data-toggle="tab" aria-controls="hats">Hats</a>
            </li>

            <!-- Dropdown -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">Footwear</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#dropdown-shoes" role="tab" id="dropdown-shoes-tab" data-toggle="tab" aria-controls="dropdownShoes">Shoes</a>
                    <a class="dropdown-item" href="#dropdown-boots" role="tab" id="dropdown-boots-tab" data-toggle="tab" aria-controls="dropdownBoots">Boots</a>
                </div>
            </li>
        </ul>

        <!-- Content Panel -->
        <div id="clothing-nav-content" class="tab-content">

            <div role="tabpanel" class="tab-pane fade show active" id="home" aria-labelledby="home-tab">
                <p>Welcome home! Click on the tabs to see the content change.</p>
            </div>

            <div role="tabpanel" class="tab-pane fade" id="hats" aria-labelledby="hats-tab">
                <p>A hat is a head covering. It can be worn for protection against the elements, ceremonial
                    reasons, religious reasons,
                    safety, or as a fashion accessory.</p>
            </div>

            <div role="tabpanel" class="tab-pane fade" id="dropdown-shoes" aria-labelledby="dropdown-shoes-tab">
                <p>A shoe is an item of footwear intended to protect and comfort the human foot while doing
                    various activities. Shoes
                    are also used as an item of decoration.</p>
            </div>

            <div role="tabpanel" class="tab-pane fade" id="dropdown-boots" aria-labelledby="dropdown-boots-tab">
                <p>A boot is a type of footwear and a specific type of shoe. Most boots mainly cover the
                    foot and the ankle, while
                    some also cover some part of the lower calf. Some boots extend up the leg, sometimes as
                    far as the knee or even
                    the hip.
                </p>
            </div>

        </div>
    </div>
</div>
