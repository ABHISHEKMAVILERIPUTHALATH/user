var db = firebase.firestore();

                // Retrieve documents from the collection and render them in the div
                // var documentsContainer = document.getElementById('addon');
                // var orderp = document.getElementById('op');
                var products = document.getElementById("products")

                // Function to render each document inside the div
                function renderDocument(doc) {
                    let data = doc.data();
                    console.log(data);
                products.innerHTML+=`
                <div id="product_box" onclick="showPopup('${data.name}','${data.image}','${data.price}')">
                    
                        <img src="${data.image }" alt="">
                        <h4>${data.name}</h4>
                        <p>${data.product_desc}</p>
                    
                </div>`
                }


                // Function to fetch and render all documents in the collection
                function fetchAndRenderDocuments() {
                db.collection('products') // Replace "your-collection-name" with the actual collection name
                    .get()
                    .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        
                        renderDocument(doc);
                        
                    }
                    ) ;  
                    })
                    .catch(function(error) {
                    console.error('Error fetching documents: ', error);
                    });
                    }

                    // Call the function to fetch and render the documents when needed
                    fetchAndRenderDocuments();