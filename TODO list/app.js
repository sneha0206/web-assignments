const inp = document.querySelector('input');
const list = document.getElementById('list');
const btn=document.getElementById('add');
const li1=document.getElementById('li1');
li1.classList.add("lis1");

btn.addEventListener('click', (e) => {
        const todoText = inp.value;
        
        if(todoText==""){
            alert("Please write something");
        }

        else{
        const li = document.createElement('li');
         li.classList.add("lis","clist");

        li.innerHTML = todoText;
       
        const deleteBTn=document.createElement('button');
        deleteBTn.innerHTML='<i class="fas fa-trash-alt"></i>';
        deleteBTn.classList.add("btn");

        const updateBTn=document.createElement('button');
        updateBTn.innerHTML='<i class="fas fa-edit"></i>';
        updateBTn.classList.add("btn");

        const upBTn=document.createElement('button');
        upBTn.innerHTML='<i class="fas fa-arrow-up"></i>';
        upBTn.classList.add("btn");

        const downBTn=document.createElement('button');
        downBTn.innerHTML='<i class="fas fa-arrow-down"></i>';
        downBTn.classList.add("btn");

        deleteBTn.addEventListener('click', () => {
            li.remove();
        })

        updateBTn.addEventListener('click', function() {
            let listItem = this.parentNode;
            let editMode = document.createElement("input");
            listItem.parentNode.replaceChild(editMode, listItem);
            editMode.classList.add("input");
            editMode.setAttribute("type", "text");
            editMode.value=listItem.textContent;
            editMode.addEventListener('keypress', (e)=>{
                if(e.keyCode===13){
                    listItem.textContent=editMode.value;
                    editMode.parentNode.replaceChild(listItem, editMode);
                }
                li.append(deleteBTn);
                li.append(updateBTn);
                li.append(upBTn);
                li.append(downBTn);
            })
        })

        upBTn.addEventListener('click',(e)=>{
    
            let myTaskList = e.target.closest('ul');
            let mvTask = e.target.closest('li');
            let prevTask = e.target.closest('li').previousSibling;
            if(typeof(prevTask)!=='undefined' && prevTask!==null){
              myTaskList.insertBefore(mvTask, prevTask);
            }
        })


        downBTn.addEventListener('click',(e)=>{
    
            let TaskList = e.target.closest('ul');
            let Task = e.target.closest('li');
            let vTask = e.target.closest('li').nextSibling;
            if(typeof(vTask)!=='undefined' && vTask!==null){
              TaskList.insertBefore(vTask, Task);
            }
        })

        list.append(li);
        li.append(deleteBTn);
        li.append(updateBTn);
        li.append(upBTn);
        li.append(downBTn);

        inp.value = "";
    }
})  