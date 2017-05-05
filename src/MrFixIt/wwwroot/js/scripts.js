$(document).ready(function () {
    $('.claim').click(function () {
        $.ajax({
            type: 'POST',
            data: { jobId: this.id },
            url: '@Url.Action("Claim", "Jobs")',
            success: function (result) {
                $()
            }
        });
    });
});