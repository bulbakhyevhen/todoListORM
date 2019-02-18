function serializeForm(form)
{
    this.form = $(form).serializeArray();
    this.data = {};
    $.each(this.form, function()
    {
        data[`${this.name}`] = this.value;
    });

    return data;
}

function createRecord(elem)
{
    var button = $(elem);
    button.on('submit', function(event)
    {
        event.preventDefault();
        var record = serializeForm('#createRecord');
        
        $.ajax(
            {
                url:"index",
                method:"POST",
                contentType:"application/json",
                data: JSON.stringify(record),
                success: function(data)
                {
                    $('#fullContent').append(recordMarkUp(data));  
                }
            });
        
    });
}
function editRecord(editButton, editForm)
{
    editButton = $('#cardContent button[name=editRecord]');
    editForm = $('#editRecord');

    editButton.click(function(event)
    {
        event.preventDefault();
        var currentRecord = $(this).parent().parent().children().children();
        var recordId = $(this).val();
        var instance = M.Modal.getInstance(editModal);

        $('#editRecord input[name=Title]').val($.trim(currentRecord[0].innerHTML));
        $('#editRecord textarea[name=Content]').val($.trim(currentRecord[1].innerHTML));
        $('#editRecord input[name=RecordId').val(recordId);

        instance.open();

        editForm.on('submit', function(event)
        {
            var replace = currentRecord;
            event.preventDefault();
            var records = serializeForm(editForm);
            var instance = M.Modal.getInstance(editModal);
            $.ajax({
                url: "index",
                method: "PUT",
                contentType: "application/json",
                data: JSON.stringify(records),
                success: function(data)
                {
                    replace[0].innerHTML = data.Title;
                    replace[1].innerHTML = data.Content;
                    instance.close();
                }            
            });
    
            
        });
    });

}

function deleteRecord()
{
    $('#cardContent button[name=deleteRecord]').click(function()
    {
        var record = {};
        record.id = $(this).val();
        $.ajax(
        {
            url:"index",
            method:"DELETE",
            contentType:"application/json",
            data:JSON.stringify(record)
        });
        $(this).parent().parent().parent().remove();
    });
}
function recordMarkUp(record)
{
   var markup =`<div class="col s10 m4" id="cardContent">
                <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">
                ${record.Title}
                <i class="material-icons">done</i>
                </span>
                <p>
                ${record.Record}
                </p>
                </div>
                <div class="card-action">
                <button data-target="editModal" name="editRecord" class="modal-trigger btn-small waves-light">
                Edit
                </button>
                <button data-target="modal1" id="deleteRecord" class="btn-small waves-light" value="">
                Delete
                </button>
                <div class="switch secondary-content" style="margin-top:8px">
                <label>
                <input type="checkbox">
                <span class="lever"></span>
                </label>
                </div
                </div>
                </div>
                </div>`;
    
    return markup;
}
createRecord('#createRecord');
deleteRecord();
editRecord();