const inputs = document.querySelectorAll('input[name="unit"]')

window.onload = () => {
    
    inputs.forEach(input => {
    
        input.addEventListener("change", function removeSelection(){
            let options = document.querySelectorAll(".option")
    
            options.forEach(option => {
                option.classList.remove("is-selected");
                let units = option.querySelector(".unit-config");
                units.classList.remove("is-visible");
            })
    
            const parent_option = input.closest(".option");
            parent_option.classList.add("is-selected");
    
            const unit_config = parent_option.querySelector(".unit-config");
            unit_config.classList.add("is-visible");
    
        })
    
    
    })


}
