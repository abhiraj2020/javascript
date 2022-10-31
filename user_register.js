$(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        $(this).validate()
        
        if ($(this).valid()) {
            data = getFormData($("#myForm"))  
            alert(data);
            data = { "data": data, "action": "register" }
            $.post('Model/user_register.py', data, function(dt)
             {
                 if(dt)
                 {
                     alert("Data Inserted Sucessfully");
                     console.log(dt);
                //location.reload();
                 }
            })
        }
    }) 

    
})