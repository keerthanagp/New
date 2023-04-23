const url='https://emojihub.yurace.pro/api/all';

fetch(url)
.then(response=>response.json())
.then(data=>
	{console.log(data);

		const containerDiv=document.getElementById('containers')
		data.forEach(container=>{
        const containersDiv=document.createElement('div');
		containersDiv.innerHTML=`
		<div class='info'>
		<div class='full'>
		<h3 class='box'>Name: ${container.name}</h3>
		<p class='box'>Category:  ${container.category}</p>
		<p class='box'>Group: ${container.group}</p>
		</div>
		</div>
		`;
		containerDiv.appendChild(containersDiv)
		})
	
	})
	.catch(error=>{console.log(error)})
