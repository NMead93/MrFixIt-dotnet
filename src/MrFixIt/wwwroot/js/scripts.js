$(document).ready(function () {
    $('.claim').click(function () {
        var clickedId = this.id
        $.ajax({
            type: 'POST',
            data: { jobId: clickedId },
            dataType: 'json',
            url: '@Url.Action("Claim", "Jobs")',
            success: function (result) {
                $(".name").text(result.Worker.FirstName);
                $(".action-row").empty().append("<button id=" + result.JobId + " class='btn btn-success btn-xs finish'><span class='glyphicon glyphicon-plus'></span> Finish</button>");
            }
        });
    });
});