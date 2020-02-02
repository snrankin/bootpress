<!-- Modals  -->
<div class="container-fluid example-container" data-category="modals">
    <h1>Modals</h1>

    <div class="mt-3 mb-5 row">
        <button type="button" class="btn btn-primary btn-lg col-3 mr-3 ml-3" data-toggle="modal" data-target="#flipFlop">
            Default Modal
        </button>

        <button type="button" class="btn btn-primary btn-lg col-3 mr-3 ml-3" data-toggle="modal" data-target="#largeShoes">
            Large Modal
        </button>

        <button type="button" class="btn btn-primary btn-lg col-3 mr-3 ml-3" data-toggle="modal" data-target="#smallShoes">
            Small Modal
        </button>

        <!-- The modal -->
        <div class="modal fade" id="smallShoes" tabindex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">

                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 class="modal-title" id="modalLabelSmall">Small Shoes</h4>
                    </div>

                    <div class="modal-body">
                        Small shoes are typically worn by people with small feet.
                    </div>

                </div>
            </div>
        </div>

        <!-- The modal -->
        <div class="modal fade" id="largeShoes" tabindex="-1" role="dialog" aria-labelledby="modalLabelLarge" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 class="modal-title" id="modalLabelLarge">Large Shoes</h4>
                    </div>

                    <div class="modal-body">
                        Large shoes are usually avoided by people with small feet.
                    </div>

                </div>
            </div>
        </div>

        <!-- The modal -->
        <div class="modal fade" id="flipFlop" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 class="modal-title" id="modalLabel">Flip-flop</h4>
                    </div>
                    <div class="modal-body">
                        A type of open-toed sandal.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Close  -->
<div class="container-fluid example-container" data-category="close">
    <h1>Close</h1>
    <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">�</span>
    </button>
</div>
