(function ($) {

    /**
     * Vue Initialization 
     */
    var app = new Vue({
        el: '#app',
        data: {
            menuItems:  [{
                    name: 'My Order',
                    url: 'my-order'
                },
                {
                    name: 'Submit',
                    url: 'submit'
                }
            ]
        },
        methods: {
            add: function(event){ 
            /* added two conventions, max= value should not be more than value of the max class element.
                calculation= making calculation on calculation class element.
            */
                debugger
            },
            remove: function(){
                debugger
            }
        }
    })

    $( "#itemDetailSubmit" ).click(function() {
        var name = $('#itemDetailName').val();
        var discription = $('#itemDetailDiscription').val();
        $trLast = $('#itemDetailTable').find("tr:last"),
        $trFirst = $('#itemDetailTable').find("tr:first"),
        $trNew = $trLast.clone();
        $tdfirst = $trNew.find('td:eq(0)')
        $tdsec = $trNew.find('td:eq(1)')
        $tdthird = $trNew.find('td:eq(2)')
        $tdfirst.text(name)
        $tdfirst.val(name)
        $tdsec.text(discription)
        $tdsec.val(discription)
        $tdthird.text(0)
        $tdthird.val(0)
        $trFirst.after($trNew);
    });

    $("#search").on("keyup", function() {
    var value = $(this).val();

    $("table tr").each(function(index) {
        if (index !== 0) {

            $row = $(this);

            var id = $row.find("td:first").text();

            if (id.indexOf(value) !== 0) {
                $row.hide();
            }
            else {
                $row.show();
            }
        }
    });
});
}(jQuery));