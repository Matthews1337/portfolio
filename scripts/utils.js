
async function AddUlRepos(link, container) {
    try {
        let response = await axios.get(link);
        let repos = response.data;

        let ulItem = document.createElement("ul"); 
        ulItem.className = "container__projects__ul"; 
        container.appendChild(ulItem);
        
        for (const repo of repos) {
            let listItem = document.createElement("li"); 
            let anchor = document.createElement("a");
            let strong = document.createElement("strong")
            let paragraph = document.createElement("p");

            paragraph.textContent = repo.description ? repo.description : "";
            anchor.href = repo.html_url; 
            anchor.target = "_blank"; 
            strong.textContent = repo.name;


            anchor.appendChild(strong)
            listItem.appendChild(anchor);
            listItem.appendChild(paragraph);
            ulItem.appendChild(listItem); 
        }
    } catch (error) {
        console.error("Error fetching repositories:", error);
    }
}




