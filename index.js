

function main() {

    $(`#js-shopping-list-form`).submit(event => {
        event.preventDefault();
        const text = $("#shopping-list-entry").val();
        console.log("text")
        $(".shopping-item").val('');
        $(".shopping-list").append(
            

           ` <li>
                <span class='shopping-item'>${text}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
            
        )

    });


    $('body').on("click", ".shopping-item-delete" , function(event) {
        $(this).parent().parent().remove();
console.log("hello")
    });
    $('body').on( "click" , ".shopping-item-toggle" , function(event) {
        $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
    console.log('text')
    })
}
$(main)


