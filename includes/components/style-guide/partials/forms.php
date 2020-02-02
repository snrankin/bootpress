<!-- Forms  -->
<div class="container-fluid example-container" data-category="forms">
    <h1>Forms</h1>
    <div class="mt-3 mb-5">
        <h3>Default form group</h3>
        <form action="javascript:void(0);">
            <fieldset class="form-group">
                <label for="first_name">First Name</label>
                <input type="text" class="form-control" id="first_name" name="first_name">
            </fieldset>
            <fieldset class="form-group">
                <label for="last_name">Last Name</label>
                <input type="text" class="form-control" id="last_name" name="last_name">
            </fieldset>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>

    <h3>Inline form</h3>
    <div class="mt-3 mb-5">
        <form action="javascript:void(0);" class="form-inline">
            <label class="mr-sm-2 mb-0" for="first_name">First Name</label>
            <input type="text" class="form-control mr-sm-2 mb-2 mb-sm-0" id="first_name" name="first_name">
            <label class="mr-sm-2 mb-0" for="last_name">Last Name</label>
            <input type="text" class="form-control mr-sm-2 mb-2 mb-sm-0" id="last_name" name="last_name">
            <button type="submit" class="btn btn-default mt-2 mt-sm-0">Submit</button>
        </form>
    </div>

    <h3>Aligned form</h3>
    <div class="mt-3 mb-5">
        <div class="container">
            <form action="javascript:void(0);">
                <div class="form-group row">
                    <label for="first_name" class="col-xs-3 col-form-label mr-2">First Name</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="first_name" name="first_name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="last_name" class="col-xs-3 col-form-label mr-2">Last Name</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="last_name" name="last_name">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="offset-xs-3 col-xs-9">
                        <button type="submit" class="btn btn-default">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="container">
            <form action="javascript:void(0);">
                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-legend col-3">Fruit</legend>
                        <div class="col-9">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="radio" name="legendRadio" id="legendRadio1" value="1">Apple</label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="radio" name="legendRadio" id="legendRadio2" value="2" checked="">Orange</label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="radio" name="legendRadio" id="legendRadio3" value="3">Watermelon</label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div class="form-group row">
                    <label for="first_name" class="col-3 col-form-label">First Name</label>
                    <div class="col-9">
                        <input type="text" class="form-control" id="first_name" name="first_name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="last_name" class="col-3 col-form-label">Last Name</label>
                    <div class="col-9">
                        <input type="text" class="form-control" id="last_name" name="last_name">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="offset-3 col-9">
                        <button type="submit" class="btn btn-default">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    </div>

    <h3>Form with help text </h3>
    <div class="mt-3 mb-5">
        <label for="accountId">Account Id</label>
        <input type="text" id="accountId" class="form-control" aria-describedby="helpAccountId">
        <span id="helpAccountId" class="form-text text-muted">Your account ID is located at the top of your
            invoice.</span>
    </div>

    <h3>Checkbox and radio </h3>
    <div class="mt-3 mb-5">
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1"> 1
            </label>
        </div>
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="2"> 2
            </label>
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="3"> 3
            </label>
        </div>
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"> 1
            </label>
        </div>
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"> 2
            </label>
        </div>
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3"> 3
            </label>
        </div>
    </div>
</div>
