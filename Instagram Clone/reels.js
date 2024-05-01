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
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('reel-video');
    var unmuteBtn = document.getElementById('unmute-btn');
    unmuteBtn.addEventListener('click', function() {
        video.muted = !video.muted;
        if (video.muted) {
            unmuteBtn.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
        } else {
            unmuteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
    });
});
// Get the button element
const followBtn = document.getElementById('reelsfollowbtn');
// Set initial state
let isFollowing = false;
// Function to toggle follow state
function toggleFollow() {
  isFollowing = !isFollowing; // Toggle state
  if (isFollowing) {
    followBtn.textContent = 'Following';
    followBtn.classList.add('following'); // Optionally add a class for styling
  } else {
    followBtn.textContent = 'Follow';
    followBtn.classList.remove('following'); // Remove the class if added
  }
}
// Add click event listener to the button
followBtn.addEventListener('click', toggleFollow);
document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.getElementById('like-btn');
    const likeHeartLike = document.getElementById('like-heart-like');
    const likeHeartUnlike = document.getElementById('like-heart-unlike');
    let isLiked = false;
    likeBtn.addEventListener('click', () => {
      isLiked = !isLiked;
      updateLikeStatus();
    });
    function updateLikeStatus() {
      if (isLiked) {
        likeHeartLike.style.display = 'inline-block';
        likeHeartUnlike.style.display = 'none';
      } else {
        likeHeartLike.style.display = 'none';
        likeHeartUnlike.style.display = 'inline-block';
      }
    }
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
