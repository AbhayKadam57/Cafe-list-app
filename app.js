const form = document.getElementById("add-item-form")

// add the items in databse

form.addEventListener("submit",(e)=>{

    let name = document.getElementById("name")
    let city = document.getElementById("city")
    e.preventDefault();
    db.collection("cafe-list").add({

        name:name.value,
        city:city.value

    })
    name.value = ""
    city.value =""    

})

// get items in data base


function getItems() {


    db.collection("cafe-list").orderBy("city").onSnapshot(snapshot => {

        let item =[]

        snapshot.docs.forEach(doc => {

            item.push({

                id:doc.id,
                ...doc.data()

            })



        })

        generateItem(item)
      
        

    })


}


function generateItem(items){

    let itemHTML =""

    items.forEach(item => {

        itemHTML+=`   <div data-id =${item.id} class="box1">
                            <li>
                                <span>${item.name}</span>
                                <span>${item.city}</span>
                            </li>
                            <div class="cross">X</div>
                      </div>`

    })

    document.getElementById("cafe-list").innerHTML = itemHTML
    DeleteItem()

}





function DeleteItem(){

    const crosss = document.querySelectorAll(".cross")
    crosss.forEach(cross=>{

        cross.addEventListener("click",(e)=>{

            let id =e.target.parentElement.getAttribute("data-id")

            db.collection("cafe-list").doc(id).delete();



        })
    })



}







getItems()


