function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const randomNumberlikes = getRandomNumber(1495, 987182);
const randomNumbercoments = getRandomNumber(58, 2346);
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                {url: "https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/Babita-wedding-cover_ws.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/476/355/HD-wallpaper-heroine-ke-deepika-padukone-portrait-deepika-padukone-portrait-actress-south-indian.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/997/206/HD-wallpaper-deadpool-dc-funny-marvel.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/855/936/HD-wallpaper-lord-krishna-with-radha-lord-krishna-radha-krishna-kanha-god-hare-krishna.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/832/912/HD-wallpaper-anu-emmanuel-amazing-beauty-beautiful-lip-beauty-indian-actress-bollywood-portrait-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/40/935/HD-wallpaper-nature-beautiful.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/487/443/HD-wallpaper-shri-hanuman-ji-ke-lord-hanuman-with-lord-ram-lord-hanuman-lord-ram-god-bajrangbali.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/950/271/HD-wallpaper-girl-with-gun-red-dress-art-station-digital-art-art-work-artist-fantasy-fantasy-girl-sexy-art-beautiful-animation.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/489/664/HD-wallpaper-women-actress-redhead-scarlett-johansson-s-h-i-e-l-d-black-widow-portrait-display-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/588/637/HD-wallpaper-rashmika-mandanna-actress-rashmika-mandana-rashmikamandanna-telugu-movie-rashmikamandana-telugu-actress-kannada-actress.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/774/394/HD-wallpaper-rashmika-mandana-kannada-actress.jpg"},
            ] ,
            likes: randomNumberlikes,
            comments: randomNumbercoments,
            posts: [
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcamJNiKgptD8mbcUCxFt9wmHvMOR_nlyeZWypooJYQ&s" },
                { url: "https://images.unsplash.com/photo-1549916620-e1a417289868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { url: "https://media.allure.com/photos/5c9908436e19499b2c37d71a/1:1/w_1688,h_1688,c_limit/Priyanka%20Chopra.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qYT71x09PArZbY3R7Siy0UhuT2Tpz8ALTXYOBxwaVA&s" },
                { url: "https://i.pinimg.com/474x/b5/8e/5e/b58e5ed2306b1525ee18053ccdc0ea87.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-ZfkLxVtWHqoA0wBILIJJZTOe2uSKlEdIlBsOhLcBQ&s" },
                { url: "https://i.pinimg.com/736x/fd/c4/c6/fdc4c644ab285de9ffd1a9444ee12f5e.jpg" },
                { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-15396,resizemode-75,msid-100637037/magazines/panache/korean-actor-singer-lee-seung-gi-deletes-instagram-posts-profile-picture-heres-why/lee-is-known-as-one-of-the-highest-paid-celebrities-in-south-korea-.jpg" },
                { url: "https://news.artnet.com/app/news-upload/2022/12/Lionel-Messi-2022-World-Cup-GettyImages-1245739377-1024x761.jpg" },
                { url: "https://cdn.siasat.com/wp-content/uploads/2022/11/Janhvi-Kapoor-1.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKPIjU6WZcqJMyFig5cHOI5YneZ4CRVzwuIDciTLuUQ&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3V6vflcNJWgnGRhki0m9dzZckA341bzdYkLrzEOBwA&s" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-30724038a395609ea32e2d262bced65c-lq" },
                { url: "https://i.pinimg.com/originals/39/9b/e1/399be1fbfd563b6830c55fe33da4ce3a.jpg" },
                { url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/funny-instagram-post-design-template-897c412052233d0c4744607a8b8b7873_screen.jpg?ts=1581203875" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-5dc00370e40a15fc31eaf8e2d58fd2bb-lq" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTpogkKHac7JihLlg3S6AMu6xOoRfA_c8GuGGByBHg&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGYd0Eq8qwD3JPHY39Z2CtoFU0hZpu4i0LByf2Lqwg&s" },
                { url: "https://i.pinimg.com/236x/1c/82/32/1c823237c2801f5104bf6de8f8e25bf3.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z01hgdPmTL1tAe1aWWzJBu3CGZsHe2D3JbL0Q4tYMA&s" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute"><img src="${randomReelUrl}" alt="Reels">
                    </div>
                </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrow").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                {url: "https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/Babita-wedding-cover_ws.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/476/355/HD-wallpaper-heroine-ke-deepika-padukone-portrait-deepika-padukone-portrait-actress-south-indian.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/997/206/HD-wallpaper-deadpool-dc-funny-marvel.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/855/936/HD-wallpaper-lord-krishna-with-radha-lord-krishna-radha-krishna-kanha-god-hare-krishna.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/832/912/HD-wallpaper-anu-emmanuel-amazing-beauty-beautiful-lip-beauty-indian-actress-bollywood-portrait-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/40/935/HD-wallpaper-nature-beautiful.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/487/443/HD-wallpaper-shri-hanuman-ji-ke-lord-hanuman-with-lord-ram-lord-hanuman-lord-ram-god-bajrangbali.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/950/271/HD-wallpaper-girl-with-gun-red-dress-art-station-digital-art-art-work-artist-fantasy-fantasy-girl-sexy-art-beautiful-animation.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/489/664/HD-wallpaper-women-actress-redhead-scarlett-johansson-s-h-i-e-l-d-black-widow-portrait-display-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/588/637/HD-wallpaper-rashmika-mandanna-actress-rashmika-mandana-rashmikamandanna-telugu-movie-rashmikamandana-telugu-actress-kannada-actress.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/774/394/HD-wallpaper-rashmika-mandana-kannada-actress.jpg"},
            ] ,
            likes: 49851,
            comments: 469,
            posts: [
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcamJNiKgptD8mbcUCxFt9wmHvMOR_nlyeZWypooJYQ&s" },
                { url: "https://images.unsplash.com/photo-1549916620-e1a417289868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { url: "https://media.allure.com/photos/5c9908436e19499b2c37d71a/1:1/w_1688,h_1688,c_limit/Priyanka%20Chopra.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qYT71x09PArZbY3R7Siy0UhuT2Tpz8ALTXYOBxwaVA&s" },
                { url: "https://i.pinimg.com/474x/b5/8e/5e/b58e5ed2306b1525ee18053ccdc0ea87.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-ZfkLxVtWHqoA0wBILIJJZTOe2uSKlEdIlBsOhLcBQ&s" },
                { url: "https://i.pinimg.com/736x/fd/c4/c6/fdc4c644ab285de9ffd1a9444ee12f5e.jpg" },
                { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-15396,resizemode-75,msid-100637037/magazines/panache/korean-actor-singer-lee-seung-gi-deletes-instagram-posts-profile-picture-heres-why/lee-is-known-as-one-of-the-highest-paid-celebrities-in-south-korea-.jpg" },
                { url: "https://news.artnet.com/app/news-upload/2022/12/Lionel-Messi-2022-World-Cup-GettyImages-1245739377-1024x761.jpg" },
                { url: "https://cdn.siasat.com/wp-content/uploads/2022/11/Janhvi-Kapoor-1.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKPIjU6WZcqJMyFig5cHOI5YneZ4CRVzwuIDciTLuUQ&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3V6vflcNJWgnGRhki0m9dzZckA341bzdYkLrzEOBwA&s" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-30724038a395609ea32e2d262bced65c-lq" },
                { url: "https://i.pinimg.com/originals/39/9b/e1/399be1fbfd563b6830c55fe33da4ce3a.jpg" },
                { url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/funny-instagram-post-design-template-897c412052233d0c4744607a8b8b7873_screen.jpg?ts=1581203875" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-5dc00370e40a15fc31eaf8e2d58fd2bb-lq" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTpogkKHac7JihLlg3S6AMu6xOoRfA_c8GuGGByBHg&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGYd0Eq8qwD3JPHY39Z2CtoFU0hZpu4i0LByf2Lqwg&s" },
                { url: "https://i.pinimg.com/236x/1c/82/32/1c823237c2801f5104bf6de8f8e25bf3.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z01hgdPmTL1tAe1aWWzJBu3CGZsHe2D3JbL0Q4tYMA&s" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute"><img src="${randomReelUrl}" alt="Reels">
                    </div>
                </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrowrev").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                {url: "https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/Babita-wedding-cover_ws.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/476/355/HD-wallpaper-heroine-ke-deepika-padukone-portrait-deepika-padukone-portrait-actress-south-indian.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/997/206/HD-wallpaper-deadpool-dc-funny-marvel.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/855/936/HD-wallpaper-lord-krishna-with-radha-lord-krishna-radha-krishna-kanha-god-hare-krishna.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/832/912/HD-wallpaper-anu-emmanuel-amazing-beauty-beautiful-lip-beauty-indian-actress-bollywood-portrait-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/40/935/HD-wallpaper-nature-beautiful.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/487/443/HD-wallpaper-shri-hanuman-ji-ke-lord-hanuman-with-lord-ram-lord-hanuman-lord-ram-god-bajrangbali.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/950/271/HD-wallpaper-girl-with-gun-red-dress-art-station-digital-art-art-work-artist-fantasy-fantasy-girl-sexy-art-beautiful-animation.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/489/664/HD-wallpaper-women-actress-redhead-scarlett-johansson-s-h-i-e-l-d-black-widow-portrait-display-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/588/637/HD-wallpaper-rashmika-mandanna-actress-rashmika-mandana-rashmikamandanna-telugu-movie-rashmikamandana-telugu-actress-kannada-actress.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/774/394/HD-wallpaper-rashmika-mandana-kannada-actress.jpg"},
            ] ,
            likes: randomNumberlikes,
            comments: randomNumbercoments,
            posts: [
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcamJNiKgptD8mbcUCxFt9wmHvMOR_nlyeZWypooJYQ&s" },
                { url: "https://images.unsplash.com/photo-1549916620-e1a417289868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { url: "https://media.allure.com/photos/5c9908436e19499b2c37d71a/1:1/w_1688,h_1688,c_limit/Priyanka%20Chopra.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qYT71x09PArZbY3R7Siy0UhuT2Tpz8ALTXYOBxwaVA&s" },
                { url: "https://i.pinimg.com/474x/b5/8e/5e/b58e5ed2306b1525ee18053ccdc0ea87.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-ZfkLxVtWHqoA0wBILIJJZTOe2uSKlEdIlBsOhLcBQ&s" },
                { url: "https://i.pinimg.com/736x/fd/c4/c6/fdc4c644ab285de9ffd1a9444ee12f5e.jpg" },
                { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-15396,resizemode-75,msid-100637037/magazines/panache/korean-actor-singer-lee-seung-gi-deletes-instagram-posts-profile-picture-heres-why/lee-is-known-as-one-of-the-highest-paid-celebrities-in-south-korea-.jpg" },
                { url: "https://news.artnet.com/app/news-upload/2022/12/Lionel-Messi-2022-World-Cup-GettyImages-1245739377-1024x761.jpg" },
                { url: "https://cdn.siasat.com/wp-content/uploads/2022/11/Janhvi-Kapoor-1.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKPIjU6WZcqJMyFig5cHOI5YneZ4CRVzwuIDciTLuUQ&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3V6vflcNJWgnGRhki0m9dzZckA341bzdYkLrzEOBwA&s" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-30724038a395609ea32e2d262bced65c-lq" },
                { url: "https://i.pinimg.com/originals/39/9b/e1/399be1fbfd563b6830c55fe33da4ce3a.jpg" },
                { url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/funny-instagram-post-design-template-897c412052233d0c4744607a8b8b7873_screen.jpg?ts=1581203875" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-5dc00370e40a15fc31eaf8e2d58fd2bb-lq" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTpogkKHac7JihLlg3S6AMu6xOoRfA_c8GuGGByBHg&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGYd0Eq8qwD3JPHY39Z2CtoFU0hZpu4i0LByf2Lqwg&s" },
                { url: "https://i.pinimg.com/236x/1c/82/32/1c823237c2801f5104bf6de8f8e25bf3.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z01hgdPmTL1tAe1aWWzJBu3CGZsHe2D3JbL0Q4tYMA&s" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute"><img src="${randomReelUrl}" alt="Reels">
                    </div>
                </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrow2").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                {url: "https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/Babita-wedding-cover_ws.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/476/355/HD-wallpaper-heroine-ke-deepika-padukone-portrait-deepika-padukone-portrait-actress-south-indian.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/997/206/HD-wallpaper-deadpool-dc-funny-marvel.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/855/936/HD-wallpaper-lord-krishna-with-radha-lord-krishna-radha-krishna-kanha-god-hare-krishna.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/832/912/HD-wallpaper-anu-emmanuel-amazing-beauty-beautiful-lip-beauty-indian-actress-bollywood-portrait-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/40/935/HD-wallpaper-nature-beautiful.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/487/443/HD-wallpaper-shri-hanuman-ji-ke-lord-hanuman-with-lord-ram-lord-hanuman-lord-ram-god-bajrangbali.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/950/271/HD-wallpaper-girl-with-gun-red-dress-art-station-digital-art-art-work-artist-fantasy-fantasy-girl-sexy-art-beautiful-animation.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/489/664/HD-wallpaper-women-actress-redhead-scarlett-johansson-s-h-i-e-l-d-black-widow-portrait-display-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/588/637/HD-wallpaper-rashmika-mandanna-actress-rashmika-mandana-rashmikamandanna-telugu-movie-rashmikamandana-telugu-actress-kannada-actress.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/774/394/HD-wallpaper-rashmika-mandana-kannada-actress.jpg"},
            ] ,
            likes: 49851,
            comments: 469,
            posts: [
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcamJNiKgptD8mbcUCxFt9wmHvMOR_nlyeZWypooJYQ&s" },
                { url: "https://images.unsplash.com/photo-1549916620-e1a417289868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { url: "https://media.allure.com/photos/5c9908436e19499b2c37d71a/1:1/w_1688,h_1688,c_limit/Priyanka%20Chopra.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qYT71x09PArZbY3R7Siy0UhuT2Tpz8ALTXYOBxwaVA&s" },
                { url: "https://i.pinimg.com/474x/b5/8e/5e/b58e5ed2306b1525ee18053ccdc0ea87.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-ZfkLxVtWHqoA0wBILIJJZTOe2uSKlEdIlBsOhLcBQ&s" },
                { url: "https://i.pinimg.com/736x/fd/c4/c6/fdc4c644ab285de9ffd1a9444ee12f5e.jpg" },
                { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-15396,resizemode-75,msid-100637037/magazines/panache/korean-actor-singer-lee-seung-gi-deletes-instagram-posts-profile-picture-heres-why/lee-is-known-as-one-of-the-highest-paid-celebrities-in-south-korea-.jpg" },
                { url: "https://news.artnet.com/app/news-upload/2022/12/Lionel-Messi-2022-World-Cup-GettyImages-1245739377-1024x761.jpg" },
                { url: "https://cdn.siasat.com/wp-content/uploads/2022/11/Janhvi-Kapoor-1.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKPIjU6WZcqJMyFig5cHOI5YneZ4CRVzwuIDciTLuUQ&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3V6vflcNJWgnGRhki0m9dzZckA341bzdYkLrzEOBwA&s" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-30724038a395609ea32e2d262bced65c-lq" },
                { url: "https://i.pinimg.com/originals/39/9b/e1/399be1fbfd563b6830c55fe33da4ce3a.jpg" },
                { url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/funny-instagram-post-design-template-897c412052233d0c4744607a8b8b7873_screen.jpg?ts=1581203875" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-5dc00370e40a15fc31eaf8e2d58fd2bb-lq" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTpogkKHac7JihLlg3S6AMu6xOoRfA_c8GuGGByBHg&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGYd0Eq8qwD3JPHY39Z2CtoFU0hZpu4i0LByf2Lqwg&s" },
                { url: "https://i.pinimg.com/236x/1c/82/32/1c823237c2801f5104bf6de8f8e25bf3.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z01hgdPmTL1tAe1aWWzJBu3CGZsHe2D3JbL0Q4tYMA&s" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute"><img src="${randomReelUrl}" alt="Reels">
                    </div>
                </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrowrev2").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                {url: "https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/Babita-wedding-cover_ws.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/476/355/HD-wallpaper-heroine-ke-deepika-padukone-portrait-deepika-padukone-portrait-actress-south-indian.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/997/206/HD-wallpaper-deadpool-dc-funny-marvel.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/855/936/HD-wallpaper-lord-krishna-with-radha-lord-krishna-radha-krishna-kanha-god-hare-krishna.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/832/912/HD-wallpaper-anu-emmanuel-amazing-beauty-beautiful-lip-beauty-indian-actress-bollywood-portrait-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/40/935/HD-wallpaper-nature-beautiful.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/487/443/HD-wallpaper-shri-hanuman-ji-ke-lord-hanuman-with-lord-ram-lord-hanuman-lord-ram-god-bajrangbali.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/950/271/HD-wallpaper-girl-with-gun-red-dress-art-station-digital-art-art-work-artist-fantasy-fantasy-girl-sexy-art-beautiful-animation.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/489/664/HD-wallpaper-women-actress-redhead-scarlett-johansson-s-h-i-e-l-d-black-widow-portrait-display-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/588/637/HD-wallpaper-rashmika-mandanna-actress-rashmika-mandana-rashmikamandanna-telugu-movie-rashmikamandana-telugu-actress-kannada-actress.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/774/394/HD-wallpaper-rashmika-mandana-kannada-actress.jpg"},
            ] ,
            likes: randomNumberlikes,
            comments: randomNumbercoments,
            posts: [
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcamJNiKgptD8mbcUCxFt9wmHvMOR_nlyeZWypooJYQ&s" },
                { url: "https://images.unsplash.com/photo-1549916620-e1a417289868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { url: "https://media.allure.com/photos/5c9908436e19499b2c37d71a/1:1/w_1688,h_1688,c_limit/Priyanka%20Chopra.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qYT71x09PArZbY3R7Siy0UhuT2Tpz8ALTXYOBxwaVA&s" },
                { url: "https://i.pinimg.com/474x/b5/8e/5e/b58e5ed2306b1525ee18053ccdc0ea87.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-ZfkLxVtWHqoA0wBILIJJZTOe2uSKlEdIlBsOhLcBQ&s" },
                { url: "https://i.pinimg.com/736x/fd/c4/c6/fdc4c644ab285de9ffd1a9444ee12f5e.jpg" },
                { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-15396,resizemode-75,msid-100637037/magazines/panache/korean-actor-singer-lee-seung-gi-deletes-instagram-posts-profile-picture-heres-why/lee-is-known-as-one-of-the-highest-paid-celebrities-in-south-korea-.jpg" },
                { url: "https://news.artnet.com/app/news-upload/2022/12/Lionel-Messi-2022-World-Cup-GettyImages-1245739377-1024x761.jpg" },
                { url: "https://cdn.siasat.com/wp-content/uploads/2022/11/Janhvi-Kapoor-1.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKPIjU6WZcqJMyFig5cHOI5YneZ4CRVzwuIDciTLuUQ&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3V6vflcNJWgnGRhki0m9dzZckA341bzdYkLrzEOBwA&s" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-30724038a395609ea32e2d262bced65c-lq" },
                { url: "https://i.pinimg.com/originals/39/9b/e1/399be1fbfd563b6830c55fe33da4ce3a.jpg" },
                { url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/funny-instagram-post-design-template-897c412052233d0c4744607a8b8b7873_screen.jpg?ts=1581203875" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-5dc00370e40a15fc31eaf8e2d58fd2bb-lq" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTpogkKHac7JihLlg3S6AMu6xOoRfA_c8GuGGByBHg&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGYd0Eq8qwD3JPHY39Z2CtoFU0hZpu4i0LByf2Lqwg&s" },
                { url: "https://i.pinimg.com/236x/1c/82/32/1c823237c2801f5104bf6de8f8e25bf3.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z01hgdPmTL1tAe1aWWzJBu3CGZsHe2D3JbL0Q4tYMA&s" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute"><img src="${randomReelUrl}" alt="Reels">
                    </div>
                </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrow3").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                {url: "https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/Babita-wedding-cover_ws.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/476/355/HD-wallpaper-heroine-ke-deepika-padukone-portrait-deepika-padukone-portrait-actress-south-indian.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/997/206/HD-wallpaper-deadpool-dc-funny-marvel.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/855/936/HD-wallpaper-lord-krishna-with-radha-lord-krishna-radha-krishna-kanha-god-hare-krishna.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/832/912/HD-wallpaper-anu-emmanuel-amazing-beauty-beautiful-lip-beauty-indian-actress-bollywood-portrait-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/40/935/HD-wallpaper-nature-beautiful.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/487/443/HD-wallpaper-shri-hanuman-ji-ke-lord-hanuman-with-lord-ram-lord-hanuman-lord-ram-god-bajrangbali.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/950/271/HD-wallpaper-girl-with-gun-red-dress-art-station-digital-art-art-work-artist-fantasy-fantasy-girl-sexy-art-beautiful-animation.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/489/664/HD-wallpaper-women-actress-redhead-scarlett-johansson-s-h-i-e-l-d-black-widow-portrait-display-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/588/637/HD-wallpaper-rashmika-mandanna-actress-rashmika-mandana-rashmikamandanna-telugu-movie-rashmikamandana-telugu-actress-kannada-actress.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/774/394/HD-wallpaper-rashmika-mandana-kannada-actress.jpg"},
            ] ,
            likes: 49851,
            comments: 469,
            posts: [
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcamJNiKgptD8mbcUCxFt9wmHvMOR_nlyeZWypooJYQ&s" },
                { url: "https://images.unsplash.com/photo-1549916620-e1a417289868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { url: "https://media.allure.com/photos/5c9908436e19499b2c37d71a/1:1/w_1688,h_1688,c_limit/Priyanka%20Chopra.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qYT71x09PArZbY3R7Siy0UhuT2Tpz8ALTXYOBxwaVA&s" },
                { url: "https://i.pinimg.com/474x/b5/8e/5e/b58e5ed2306b1525ee18053ccdc0ea87.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-ZfkLxVtWHqoA0wBILIJJZTOe2uSKlEdIlBsOhLcBQ&s" },
                { url: "https://i.pinimg.com/736x/fd/c4/c6/fdc4c644ab285de9ffd1a9444ee12f5e.jpg" },
                { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-15396,resizemode-75,msid-100637037/magazines/panache/korean-actor-singer-lee-seung-gi-deletes-instagram-posts-profile-picture-heres-why/lee-is-known-as-one-of-the-highest-paid-celebrities-in-south-korea-.jpg" },
                { url: "https://news.artnet.com/app/news-upload/2022/12/Lionel-Messi-2022-World-Cup-GettyImages-1245739377-1024x761.jpg" },
                { url: "https://cdn.siasat.com/wp-content/uploads/2022/11/Janhvi-Kapoor-1.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKPIjU6WZcqJMyFig5cHOI5YneZ4CRVzwuIDciTLuUQ&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3V6vflcNJWgnGRhki0m9dzZckA341bzdYkLrzEOBwA&s" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-30724038a395609ea32e2d262bced65c-lq" },
                { url: "https://i.pinimg.com/originals/39/9b/e1/399be1fbfd563b6830c55fe33da4ce3a.jpg" },
                { url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/funny-instagram-post-design-template-897c412052233d0c4744607a8b8b7873_screen.jpg?ts=1581203875" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-5dc00370e40a15fc31eaf8e2d58fd2bb-lq" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTpogkKHac7JihLlg3S6AMu6xOoRfA_c8GuGGByBHg&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGYd0Eq8qwD3JPHY39Z2CtoFU0hZpu4i0LByf2Lqwg&s" },
                { url: "https://i.pinimg.com/236x/1c/82/32/1c823237c2801f5104bf6de8f8e25bf3.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z01hgdPmTL1tAe1aWWzJBu3CGZsHe2D3JbL0Q4tYMA&s" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute"><img src="${randomReelUrl}" alt="Reels">
                    </div>
                </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrowrev3").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                {url: "https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/Babita-wedding-cover_ws.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/476/355/HD-wallpaper-heroine-ke-deepika-padukone-portrait-deepika-padukone-portrait-actress-south-indian.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/997/206/HD-wallpaper-deadpool-dc-funny-marvel.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/855/936/HD-wallpaper-lord-krishna-with-radha-lord-krishna-radha-krishna-kanha-god-hare-krishna.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/832/912/HD-wallpaper-anu-emmanuel-amazing-beauty-beautiful-lip-beauty-indian-actress-bollywood-portrait-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/40/935/HD-wallpaper-nature-beautiful.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/487/443/HD-wallpaper-shri-hanuman-ji-ke-lord-hanuman-with-lord-ram-lord-hanuman-lord-ram-god-bajrangbali.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/950/271/HD-wallpaper-girl-with-gun-red-dress-art-station-digital-art-art-work-artist-fantasy-fantasy-girl-sexy-art-beautiful-animation.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/489/664/HD-wallpaper-women-actress-redhead-scarlett-johansson-s-h-i-e-l-d-black-widow-portrait-display-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/588/637/HD-wallpaper-rashmika-mandanna-actress-rashmika-mandana-rashmikamandanna-telugu-movie-rashmikamandana-telugu-actress-kannada-actress.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/774/394/HD-wallpaper-rashmika-mandana-kannada-actress.jpg"},
            ] ,
            likes: randomNumberlikes,
            comments: randomNumbercoments,
            posts: [
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcamJNiKgptD8mbcUCxFt9wmHvMOR_nlyeZWypooJYQ&s" },
                { url: "https://images.unsplash.com/photo-1549916620-e1a417289868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { url: "https://media.allure.com/photos/5c9908436e19499b2c37d71a/1:1/w_1688,h_1688,c_limit/Priyanka%20Chopra.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qYT71x09PArZbY3R7Siy0UhuT2Tpz8ALTXYOBxwaVA&s" },
                { url: "https://i.pinimg.com/474x/b5/8e/5e/b58e5ed2306b1525ee18053ccdc0ea87.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-ZfkLxVtWHqoA0wBILIJJZTOe2uSKlEdIlBsOhLcBQ&s" },
                { url: "https://i.pinimg.com/736x/fd/c4/c6/fdc4c644ab285de9ffd1a9444ee12f5e.jpg" },
                { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-15396,resizemode-75,msid-100637037/magazines/panache/korean-actor-singer-lee-seung-gi-deletes-instagram-posts-profile-picture-heres-why/lee-is-known-as-one-of-the-highest-paid-celebrities-in-south-korea-.jpg" },
                { url: "https://news.artnet.com/app/news-upload/2022/12/Lionel-Messi-2022-World-Cup-GettyImages-1245739377-1024x761.jpg" },
                { url: "https://cdn.siasat.com/wp-content/uploads/2022/11/Janhvi-Kapoor-1.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKPIjU6WZcqJMyFig5cHOI5YneZ4CRVzwuIDciTLuUQ&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3V6vflcNJWgnGRhki0m9dzZckA341bzdYkLrzEOBwA&s" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-30724038a395609ea32e2d262bced65c-lq" },
                { url: "https://i.pinimg.com/originals/39/9b/e1/399be1fbfd563b6830c55fe33da4ce3a.jpg" },
                { url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/funny-instagram-post-design-template-897c412052233d0c4744607a8b8b7873_screen.jpg?ts=1581203875" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-5dc00370e40a15fc31eaf8e2d58fd2bb-lq" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTpogkKHac7JihLlg3S6AMu6xOoRfA_c8GuGGByBHg&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGYd0Eq8qwD3JPHY39Z2CtoFU0hZpu4i0LByf2Lqwg&s" },
                { url: "https://i.pinimg.com/236x/1c/82/32/1c823237c2801f5104bf6de8f8e25bf3.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z01hgdPmTL1tAe1aWWzJBu3CGZsHe2D3JbL0Q4tYMA&s" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute"><img src="${randomReelUrl}" alt="Reels">
                    </div>
                </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrow4").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                {url: "https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/Babita-wedding-cover_ws.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/476/355/HD-wallpaper-heroine-ke-deepika-padukone-portrait-deepika-padukone-portrait-actress-south-indian.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/997/206/HD-wallpaper-deadpool-dc-funny-marvel.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/855/936/HD-wallpaper-lord-krishna-with-radha-lord-krishna-radha-krishna-kanha-god-hare-krishna.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/832/912/HD-wallpaper-anu-emmanuel-amazing-beauty-beautiful-lip-beauty-indian-actress-bollywood-portrait-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/40/935/HD-wallpaper-nature-beautiful.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/487/443/HD-wallpaper-shri-hanuman-ji-ke-lord-hanuman-with-lord-ram-lord-hanuman-lord-ram-god-bajrangbali.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/950/271/HD-wallpaper-girl-with-gun-red-dress-art-station-digital-art-art-work-artist-fantasy-fantasy-girl-sexy-art-beautiful-animation.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/489/664/HD-wallpaper-women-actress-redhead-scarlett-johansson-s-h-i-e-l-d-black-widow-portrait-display-thumbnail.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/588/637/HD-wallpaper-rashmika-mandanna-actress-rashmika-mandana-rashmikamandanna-telugu-movie-rashmikamandana-telugu-actress-kannada-actress.jpg"},
                {url: "https://w0.peakpx.com/wallpaper/774/394/HD-wallpaper-rashmika-mandana-kannada-actress.jpg"},
            ] ,
            likes: 49851,
            comments: 469,
            posts: [
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcamJNiKgptD8mbcUCxFt9wmHvMOR_nlyeZWypooJYQ&s" },
                { url: "https://images.unsplash.com/photo-1549916620-e1a417289868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { url: "https://media.allure.com/photos/5c9908436e19499b2c37d71a/1:1/w_1688,h_1688,c_limit/Priyanka%20Chopra.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qYT71x09PArZbY3R7Siy0UhuT2Tpz8ALTXYOBxwaVA&s" },
                { url: "https://i.pinimg.com/474x/b5/8e/5e/b58e5ed2306b1525ee18053ccdc0ea87.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-ZfkLxVtWHqoA0wBILIJJZTOe2uSKlEdIlBsOhLcBQ&s" },
                { url: "https://i.pinimg.com/736x/fd/c4/c6/fdc4c644ab285de9ffd1a9444ee12f5e.jpg" },
                { url: "https://img.etimg.com/thumb/width-640,height-480,imgsize-15396,resizemode-75,msid-100637037/magazines/panache/korean-actor-singer-lee-seung-gi-deletes-instagram-posts-profile-picture-heres-why/lee-is-known-as-one-of-the-highest-paid-celebrities-in-south-korea-.jpg" },
                { url: "https://news.artnet.com/app/news-upload/2022/12/Lionel-Messi-2022-World-Cup-GettyImages-1245739377-1024x761.jpg" },
                { url: "https://cdn.siasat.com/wp-content/uploads/2022/11/Janhvi-Kapoor-1.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKPIjU6WZcqJMyFig5cHOI5YneZ4CRVzwuIDciTLuUQ&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3V6vflcNJWgnGRhki0m9dzZckA341bzdYkLrzEOBwA&s" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-30724038a395609ea32e2d262bced65c-lq" },
                { url: "https://i.pinimg.com/originals/39/9b/e1/399be1fbfd563b6830c55fe33da4ce3a.jpg" },
                { url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/funny-instagram-post-design-template-897c412052233d0c4744607a8b8b7873_screen.jpg?ts=1581203875" },
                { url: "https://qph.cf2.quoracdn.net/main-qimg-5dc00370e40a15fc31eaf8e2d58fd2bb-lq" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTpogkKHac7JihLlg3S6AMu6xOoRfA_c8GuGGByBHg&s" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGYd0Eq8qwD3JPHY39Z2CtoFU0hZpu4i0LByf2Lqwg&s" },
                { url: "https://i.pinimg.com/236x/1c/82/32/1c823237c2801f5104bf6de8f8e25bf3.jpg" },
                { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Z01hgdPmTL1tAe1aWWzJBu3CGZsHe2D3JbL0Q4tYMA&s" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute"><img src="${randomReelUrl}" alt="Reels">
                    </div>
                </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrowrev4").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let btnNotifications = document.getElementById('btnNotificationsinfo');
    let notificationPanel = document.querySelector('.notificactionpanel');
    let isPanelVisible = false; // Flag to track the panel visibility
    if (btnNotifications && notificationPanel) { // Check if both elements exist
        btnNotifications.addEventListener('click', function() {
            if (!isPanelVisible) {
                notificationPanel.style.marginLeft = '245px';
                isPanelVisible = true;
            } else {
                notificationPanel.style.marginLeft = '-500px'; // Adjust this value based on your design
                isPanelVisible = false;
            }
        });
    } else {
        console.error("Button or notification panel element not found.");
    }
});
{ function generateRandomValue() {
        return Math.floor(Math.random() * 9) + 1;
    }
    document.addEventListener('DOMContentLoaded', function() {
        let notificationsdata = JSON.parse(localStorage.getItem('notificationsdata')) || [
            {
                user: "sonam_chavan09",
                dp: "https://i.pinimg.com/736x/06/9e/00/069e008833a8f421133121e49a5b493a.jpg",
                preview: "https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png",
            },
            {
                user: "dream_girl_janvi075",
                dp: "https://images.saatchiart.com/saatchi/1122046/art/10038751/9101669-QZUCGYJW-7.jpg",
                preview: "https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png",
            },
            {
                user: "rajani_sharma",
                dp: "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRXDtE8HTmwxuI10Qi4TZCBnAwgz0PHIpBBJp-u8lhw&s",
            },
            {
                user: "mohit_chikara99",
                dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3KuZmc-fVQ6_yHzGKlOkJ2-fy32nbAW6hT84cD6K_Q&s",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRXDtE8HTmwxuI10Qi4TZCBnAwgz0PHIpBBJp-u8lhw&s",
            },
            {
                user: "swati_patil_",
                dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8cl4P1k7pgtOSdnf4cJkzJdhG58M09Ul9jktQX_bMA&s",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdWEBtx74EINLFCjCz31q0wqZoNXqjwB0hPkXMwKbpA&s",
            },
            {
                user: "ojawi88",
                dp: "https://i.pinimg.com/474x/06/61/4a/06614ac957c2aef663e4054e6e7bc164.jpg",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRXDtE8HTmwxuI10Qi4TZCBnAwgz0PHIpBBJp-u8lhw&s",
            },
            {
                user: "rajesh915",
                dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29VPSfrsY-c6hsJg2BBGIDUPY4RmjBZb1vwsMhyFzGw&s",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdWEBtx74EINLFCjCz31q0wqZoNXqjwB0hPkXMwKbpA&s",
            },
        ];
        let clutter_notifications = "";
        notificationsdata.forEach(function(elem, idx) {
            const randomNumber = generateRandomValue()
            clutter_notifications += ` <div id="likenotifi">
            <div id="dpimageinnoti"><img src="${elem.dp}" alt=""></div>
            <div id="infoinnoti">
                <div id="infoinnotiupper"><h6>${elem.user}</h6><p> liked your reel.</p></div>
    <p id="day-timeinnoti">${randomNumber}hr</p>              
            </div>
            <div id="post-previve"> <img src="${elem.preview}" alt="" ></div>
            </div>`;
        });
        document.querySelector(".notoficationprofils").innerHTML = clutter_notifications;
    });
}
// Define the function to generate a random value between 1 and 9
function generateRandomValue() {
    return Math.floor(Math.random() * 9) + 1;
}
// Add an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    let notificationsdatafollow = JSON.parse(localStorage.getItem('notificationsdatafollow')) || [
        {
            user: "shabana_sharma99",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNwPd2yvMrFk1jk5u9D0xoQcIqHpnMq5kPeHA9F8tig&s",
        },
        {
            user: "roshani.jha007",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcwCN_O9I0L5WJzKq0YleSmw6CVSCeYbK7CAOcZFPmw&s",
        },
        {
            user: "rohit.lakha",
            dp: "https://i.pinimg.com/736x/c5/d9/2f/c5d92f685f2bfbe8867376e937eb9309.jpg",
        },
        {
            user: "joy_sharma_999",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh96St2vUaXDsQ2XUM3-VLqENf8RmFVfQX2DQeNcxvQ&s",
        },
        {
            user: "prakash_rathi505",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNbhCon7-W5aLw36pgxnihglQc-X4e-UMWbJVUtjhpA&s",
        },
        {
            user: "harshita_joshi55",
            dp: "https://i.pinimg.com/736x/3e/31/00/3e3100c71dacaa22de996dcaade4504e.jpg",
        },
        {
            user: "kashvi_aochar7",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsURPBNwCU_9tkPTu1Jcz-I_ZIGysUSXY2LInGIgiVog&s",
        }
    ];
    let clutter_notificationsfollow = "";
    notificationsdatafollow.forEach(function(elem, idx) {
        const randomNumber = generateRandomValue();
        clutter_notificationsfollow += ` <div id="follownotifi">
        <div id="dpimageinnoti"><img src="${elem.dp}" alt=""></div>
        <div id="infoinnoti">
            <div id="infoinnotiupperfollw"><h6>${elem.user}</h6></div>
            <div id="infoinnotilower"> <p id="startfollo"> started following you.</p> <p id="day-timeinnotiinfollow">${randomNumber}d</p> </div>    
        </div>
        <div id="follow-follwing">
            <button id="noti-follow">Follow</button>
            <button id="noti-following">Following</button>
        </div>
    </div>`;
    });
    document.querySelector(".notoficationprofilsforfollows").innerHTML = clutter_notificationsfollow;
});
let btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', function() {
    window.location.href = "search.html";
});
let btnHome = document.getElementById('btnHome');
btnHome.addEventListener('click', function() {
    window.location.href = "feed.html";
});
let btnExplore = document.getElementById('btnExplore');
btnExplore.addEventListener('click', function() {
    window.location.href = "explore.html";
});
let btnReels = document.getElementById('btnReels');
btnReels.addEventListener('click', function() {
    window.location.href = "reels.html";
});
let btnMessages = document.getElementById('btnMessages');
btnMessages.addEventListener('click', function() {
    window.location.href = "messages.html";
});
let profileDpbtns = document.getElementById('profileDpbtns');
profileDpbtns.addEventListener('click', function() {
    window.location.href = "profile.html";
});
document.addEventListener('DOMContentLoaded', function() {
    let btnNotifications = document.getElementById('btnNotificationsinfo');
    let notificationPanel = document.querySelector('.notificactionpanel');
    let isPanelVisible = false; // Flag to track the panel visibility
    if (btnNotifications && notificationPanel) { // Check if both elements exist
        btnNotifications.addEventListener('click', function() {
            if (!isPanelVisible) {
                notificationPanel.style.marginLeft = '245px';
                isPanelVisible = true;
            } else {
                notificationPanel.style.marginLeft = '-500px'; // Adjust this value based on your design
                isPanelVisible = false;
            }
        });
    } else {
        console.error("Button or notification panel element not found.");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    let btnCreate = document.getElementById('btnCreate');
    let createfunction = document.querySelector('.createfunction');
    let isPanelVisible = false; // Flag to track the panel visibility
    if (btnCreate && createfunction) { // Check if both elements exist
        btnCreate.addEventListener('click', function() {
            if (!isPanelVisible) {
                createfunction.style.marginLeft = '0';
                isPanelVisible = true;
            } else {
                createfunction.style.marginLeft = '-500px'; // Adjust this value based on your design
                isPanelVisible = false;
            }
        });
    } else {
        console.error("Button or notification panel element not found.");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    let postabsolute = document.querySelector('#postabosolote');
    let createfunction_1 = document.getElementById('createfunction-1');
    createfunction_1.addEventListener('click', function() {
        if (postabsolute) {
            postabsolute.style.display = 'block'; 
            postabsolute.style.display = 'flex'; 
        } else {
            console.log('postabsolute is undefined or null');
        }
    });
});
{
    document.addEventListener('DOMContentLoaded', function() {
        let postabosolote_cancle = document.getElementById('postabosolote-cancle');
        let postabsolute = document.querySelector('#postabosolote');
        if (postabosolote_cancle && postabsolute) {
            postabosolote_cancle.addEventListener('click', function() {
                postabsolute.style.display = 'none'; // Hide postabsolute
            });
        } else {
            console.error('postabosolote_cancle:', postabosolote_cancle);
            console.error('postabsolute:', postabsolute);
            console.error('postabosolote_cancle or postabsolute is null or undefined.');
        }
    });
}
{
    const imageInput = document.getElementById('imageInput');
imageInput.addEventListener('change', function() {
    let createpostprevbox = document.querySelector('.createpostprevbox');
    createpostprevbox.style.display = 'block';
    const selectedFile = this.files[0]; // Get the selected file
    if (selectedFile) {
        const fileUrl = URL.createObjectURL(selectedFile);
        // Check if there is an existing preview image
        const existingPreview = document.getElementById('previewimg');
        if (existingPreview) {
            existingPreview.src = fileUrl; // Update the existing image source
            existingPreview.alt = selectedFile.name; // Update the alt attribute
        } else {
            // If no existing preview image, create a new one
            const newImage = document.createElement('img');
            newImage.id = 'previewimg';
            newImage.src = fileUrl;
            newImage.alt = selectedFile.name;
            // Append the new image to the container
            document.querySelector("#previewboxincreatebox").appendChild(newImage);
        }
    } else {
        console.log('No image selected');
    }
});
}
{
    document.addEventListener('DOMContentLoaded', function() {
        const shareImageInput = document.getElementById('imageInput');
        shareImageInput.addEventListener('change', function() {
            const createSharePreviewBox = document.querySelector('#sharepreviewimg');
            createSharePreviewBox.style.display = 'block';
            const selectedFile = this.files[0]; // Get the selected file
            if (selectedFile) {
                const fileUrl = URL.createObjectURL(selectedFile);
                // Check if there is an existing preview image
                const existingPreview = document.getElementById('sharePreviewImgElement');
                if (existingPreview) {
                    existingPreview.src = fileUrl; // Update the existing image source
                    existingPreview.alt = selectedFile.name; // Update the alt attribute
                } else {
                    // If no existing preview image, create a new one
                    const newImage = document.createElement('img');
                    newImage.id = 'sharePreviewImgElement';
                    newImage.src = fileUrl;
                    newImage.alt = selectedFile.name;
                    // Append the new image to the container
                    createSharePreviewBox.appendChild(newImage);
                }
            } else {
                console.log('No image selected');
            }
        });
    });
}
{
    document.addEventListener('DOMContentLoaded', function() {
        let upper_lowerbtn = document.getElementById('upper-lowerbtn');
        let chevron_down = document.getElementById('chevron-down');
        let angle_up = document.getElementById('angle-up');
        let boldtext = document.querySelector('#accAccessibilitysectionbox h6');
        let hiddenpanelboxforacc = document.querySelector('#hiddenpanelboxforacc');
        let uppertoggerflag = false;
        upper_lowerbtn.addEventListener('click', function() {
            if (uppertoggerflag) {
                chevron_down.style.display = 'none';
                angle_up.style.display = 'block';
                boldtext.style.fontWeight = 300;
                uppertoggerflag = false;
                hiddenpanelboxforacc.style.top = '0';
                hiddenpanelboxforacc.style.zIndex = '-2';
            } else {
                chevron_down.style.display = 'block';
                angle_up.style.display = 'none';
                boldtext.style.fontWeight = 'bold';
                uppertoggerflag = true;
                hiddenpanelboxforacc.style.top = '100%';
                hiddenpanelboxforacc.style.zIndex = '0';
            }
        });
    });
}
{
    document.addEventListener('DOMContentLoaded', function() {
        let nexttickarrorshare = document.getElementById('nexttickarrorshare');
        let postsharddone = document.querySelector('.postsharddone');
        let createpostshare = document.querySelector('.createpostshare')
        nexttickarrorshare.addEventListener('click', function() {
            postsharddone.style.display = 'block'; 
            createpostshare.style.display = 'none'
            console.log("Button clicked");
        });
    });
}
{
    let backtickarrorpost = document.getElementById('backtickarrorpost');
    let createpostprevbox = document.querySelector('.createpostprevbox');
    let createpostbox = document.querySelector('#postabosolote');
    backtickarrorpost.addEventListener('click',function(){
        createpostprevbox.style.display = 'none';
        createpostbox.style.display = 'none';
    })
}
{
    document.addEventListener('DOMContentLoaded', () => {
        const textarea = document.getElementById('capctiontextarea');
        const charCountSpan = document.getElementById('char-count');
        const maxCharacters = 2000; 
        function updateCharCount() {
            const text = textarea.value;
            const charCount = text.length;
            charCountSpan.textContent = charCount + '/' + maxCharacters;
            if (charCount > maxCharacters) {
                textarea.value = text.slice(0, maxCharacters); 
            }
        }
        textarea.addEventListener('input', updateCharCount);
    });
}
{
    let nexttickarrorpost = document.getElementById('nexttickarrorpost');
    let createpostshare = document.querySelector('.createpostshare');
    let previewboxincreatebox = document.getElementById('previewboxincreatebox');
    let createpostprevbox = document.querySelector('.createpostprevbox')
    nexttickarrorpost.addEventListener('click',function(){
        createpostshare.style.display = 'block';
        previewboxincreatebox.style.display = 'none';
        createpostprevbox.style.display = 'none';
    })
}
{
    let backtickarrorshare = document.getElementById('backtickarrorshare');
    let createpostshare = document.querySelector('.createpostshare');
    let previewboxincreatebox = document.getElementById('previewboxincreatebox');
    let createpostprevbox = document.querySelector('.createpostprevbox')
    backtickarrorshare.addEventListener('click',function(){
        createpostshare.style.display = 'none';
        previewboxincreatebox.style.display = 'block';
        createpostprevbox.style.display = 'block';
    })
}
{
    let live_Next_btn = document.getElementById('live_Next-btn');
    let notavlibaltt = document.querySelector('#notavlibaltt');
    live_Next_btn.addEventListener('click', function () {
        notavlibaltt.style.bottom = '0';
        setTimeout(function () {
            notavlibaltt.style.bottom = '-10%';
        }, 2000);
    });
}
{
    document.addEventListener('DOMContentLoaded', function() {
        let liveabosolote_cancle = document.getElementById('liveabosolote-cancle');
        let liveabosolote = document.querySelector('#liveabosolote');
        if (liveabosolote_cancle && liveabosolote) {
            liveabosolote_cancle.addEventListener('click', function() {
                liveabosolote.style.display = 'none'; 
            });
        } else {
            console.error('postabosolote_cancle:', liveabosolote_cancle);
            console.error('postabsolute:', liveabosolote);
            console.error('postabosolote_cancle or postabsolute is null or undefined.');
        }
    });
}
{
    document.addEventListener('DOMContentLoaded', function() {
        let liveabosolote = document.querySelector('#liveabosolote');
        let createfunction_2 = document.getElementById('createfunction-2');
        createfunction_2.addEventListener('click', function() {
            if (liveabosolote) {
                liveabosolote.style.display = 'block'; 
                liveabosolote.style.display = 'flex'; 
            } else {
                console.log('liveabosolote is undefined or null');
            }
        });
    });
}
{ function generateRandomValue() {
        return Math.floor(Math.random() * 9) + 1;
    }
    document.addEventListener('DOMContentLoaded', function() {
        let notificationsdata = JSON.parse(localStorage.getItem('notificationsdata')) || [
            {
                user: "sonam_chavan09",
                dp: "https://i.pinimg.com/736x/06/9e/00/069e008833a8f421133121e49a5b493a.jpg",
                preview: "https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png",
            },
            {
                user: "dream_girl_janvi075",
                dp: "https://images.saatchiart.com/saatchi/1122046/art/10038751/9101669-QZUCGYJW-7.jpg",
                preview: "https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png",
            },
            {
                user: "rajani_sharma",
                dp: "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRXDtE8HTmwxuI10Qi4TZCBnAwgz0PHIpBBJp-u8lhw&s",
            },
            {
                user: "mohit_chikara99",
                dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3KuZmc-fVQ6_yHzGKlOkJ2-fy32nbAW6hT84cD6K_Q&s",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRXDtE8HTmwxuI10Qi4TZCBnAwgz0PHIpBBJp-u8lhw&s",
            },
            {
                user: "swati_patil_",
                dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8cl4P1k7pgtOSdnf4cJkzJdhG58M09Ul9jktQX_bMA&s",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdWEBtx74EINLFCjCz31q0wqZoNXqjwB0hPkXMwKbpA&s",
            },
            {
                user: "ojawi88",
                dp: "https://i.pinimg.com/474x/06/61/4a/06614ac957c2aef663e4054e6e7bc164.jpg",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRXDtE8HTmwxuI10Qi4TZCBnAwgz0PHIpBBJp-u8lhw&s",
            },
            {
                user: "rajesh915",
                dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29VPSfrsY-c6hsJg2BBGIDUPY4RmjBZb1vwsMhyFzGw&s",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdWEBtx74EINLFCjCz31q0wqZoNXqjwB0hPkXMwKbpA&s",
            },
        ];
        let clutter_notifications = "";
        notificationsdata.forEach(function(elem, idx) {
            const randomNumber = generateRandomValue()
            clutter_notifications += ` <div id="likenotifi">
            <div id="dpimageinnoti"><img src="${elem.dp}" alt=""></div>
            <div id="infoinnoti">
                <div id="infoinnotiupper"><h6>${elem.user}</h6><p> liked your reel.</p></div>
    <p id="day-timeinnoti">${randomNumber}hr</p>              
            </div>
            <div id="post-previve"> <img src="${elem.preview}" alt="" ></div>
            </div>`;
        });
        document.querySelector(".notoficationprofils").innerHTML = clutter_notifications;
    });
}
// Define the function to generate a random value between 1 and 9
function generateRandomValue() {
    return Math.floor(Math.random() * 9) + 1;
}
// Add an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    let notificationsdatafollow = JSON.parse(localStorage.getItem('notificationsdatafollow')) || [
        {
            user: "shabana_sharma99",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNwPd2yvMrFk1jk5u9D0xoQcIqHpnMq5kPeHA9F8tig&s",
        },
        {
            user: "roshani.jha007",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcwCN_O9I0L5WJzKq0YleSmw6CVSCeYbK7CAOcZFPmw&s",
        },
        {
            user: "rohit.lakha",
            dp: "https://i.pinimg.com/736x/c5/d9/2f/c5d92f685f2bfbe8867376e937eb9309.jpg",
        },
        {
            user: "joy_sharma_999",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh96St2vUaXDsQ2XUM3-VLqENf8RmFVfQX2DQeNcxvQ&s",
        },
        {
            user: "prakash_rathi505",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNbhCon7-W5aLw36pgxnihglQc-X4e-UMWbJVUtjhpA&s",
        },
        {
            user: "harshita_joshi55",
            dp: "https://i.pinimg.com/736x/3e/31/00/3e3100c71dacaa22de996dcaade4504e.jpg",
        },
        {
            user: "kashvi_aochar7",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsURPBNwCU_9tkPTu1Jcz-I_ZIGysUSXY2LInGIgiVog&s",
        }
    ];
    let clutter_notificationsfollow = "";
    notificationsdatafollow.forEach(function(elem, idx) {
        const randomNumber = generateRandomValue();
        clutter_notificationsfollow += ` <div id="follownotifi">
        <div id="dpimageinnoti"><img src="${elem.dp}" alt=""></div>
        <div id="infoinnoti">
            <div id="infoinnotiupperfollw"><h6>${elem.user}</h6></div>
            <div id="infoinnotilower"> <p id="startfollo"> started following you.</p> <p id="day-timeinnotiinfollow">${randomNumber}d</p> </div>    
        </div>
        <div id="follow-follwing">
            <button id="noti-follow">Follow</button>
            <button id="noti-following">Following</button>
        </div>
    </div>`;
    });
    document.querySelector(".notoficationprofilsforfollows").innerHTML = clutter_notificationsfollow;
});
var displayhide = 1;
function sidebarboxshow() {
    var sidebarBoxes = document.getElementsByClassName("moresidebarbox");
    for (var i = 0; i < sidebarBoxes.length; i++) {
        sidebarBoxes[i].style.display = "none";
        if (displayhide == 0) {
            sidebarBoxes[i].style.display = "block"; 
            sidebarBoxes[i].style.display = "flex"; 
            displayhide = 1
        } else {
            sidebarBoxes[i].style.display = "none";
            displayhide = 0
        }
    }
}
