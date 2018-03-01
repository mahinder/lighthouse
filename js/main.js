(function ($) {

    var userData = {"name": "Jon Smith", "job": "Job #12345- PIT Stadium:", "street": "123 Any Street, PA. USA"}
    var wbsData = [{"id": "1", "name": "WBS 1"},{"id": "2", "name": "WBS 2"},{"id": "3", "name": "WBS 3"}]
    var toolsData = [{"id": "1", "name": "Drills"},{"id": "2", "name": "Saw"},{"id": "3", "name": "Sholve"}]
    var accessoriesData = [
        { "wbs": "WBS 1", "tools": [ {"id": "1", "tool" : "Drills", "discription": "Sample Discription", "availableQty": "100", "status": "Available" }, {"id": "2", "tool" : "Saw", "discription": "Sample Discription", "availableQty": "100", "status": "Available" }, {"id": "3", "tool" : "Sholve", "discription": "Sample Discription", "availableQty": "100", "status": "Available" }] },
        { "wbs": "WBS 2", "tools": [ {"id": "4", "tool" : "Drills", "discription": "Sample Discription", "availableQty": "100", "status": "Available" }, {"id": "5", "tool" : "Saw", "discription": "Sample Discription", "availableQty": "100", "status": "Available" }, {"id": "6", "tool" : "Sholve", "discription": "Sample Discription", "availableQty": "100", "status": "Available" }] },
        { "wbs": "WBS 3", "tools": [ {"id": "7", "tool" : "Drills", "discription": "Sample Discription", "availableQty": "100", "status": "Available" }, {"id": "8", "tool" : "Saw", "discription": "Sample Discription", "availableQty": "100", "status": "Available" }, {"id": "9", "tool" : "Sholve", "discription": "Sample Discription", "availableQty": "100", "status": "Available" }] }
    ]



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
            ],
            userData: userData,
            wbsData: wbsData,
            toolsData: toolsData,
            accessoriesData: accessoriesData
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

    var search = function(value, type, splValue, selector){
        if(type == "select" && (splValue == "All Tools" || splValue == "All WBS")){
            selector.show()
        }else{
            var patt = new RegExp(value, "i");
            selector.each(function(index) {
                if(type == "select" && (splValue =="All WBS")){
                    if(!($(this).text().search(patt) >= 0)){
                        $(this).hide();
                    }
                    if(($(this).text().search(patt) >= 0)){
                        $(this).show();
                    }
                }else{
                    if (index !== 0) {
                        if (!($(this).find('td').text().search(patt) >= 0)) {
                            $(this).not('.myHead').hide();
                        }
                        if (($(this).find('td').text().search(patt) >= 0)) {
                            $(this).show();
                        }
                    }
                }
            });
        }
    }

    $(".search").on("keyup", function() {
        var value = $(this).val();
        search(value, "input", "th", $('table').find('tr'));
        
    });
    
    $("#tools").on("change", function() {
        var value = $(this).val();
        search(value, "select", value, $('table').find('tr'));
    })

    $("#wbsList").on("change", function() {
        var value = $(this).val();
        search(value, "select", value, $('.table-section'));
        // if(value == "All WBS"){
        //     $('.table-section').show();
        // }else{
        //     $('.table-section').each(function(){
        //         var patt = new RegExp(value, "i");
        //         if(!($(this).text().search(patt) >= 0)){
        //             $(this).hide();
        //         }
        //         if(($(this).text().search(patt) >= 0)){
        //             $(this).show();
        //         }
        //     });
        // }
    })

}(jQuery));