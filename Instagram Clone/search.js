let profiledata 
document.addEventListener('DOMContentLoaded', function() {
    profiledata = JSON.parse(localStorage.getItem('profiledata')) || [
        {
            user: "elvish_yadav",
            fullname:"Elvish Raosahab",
            bio:"",
            dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-jA4ByqObdWE0FqnEcwAKyPyn10uGH7u0ZF8q-BOmw&s",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.feoh3-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F440527708_1064838484611585_4131776572060122122_n.jpg%3Fstp%3Ddst-jpg_e15%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIuZjI5MzUwIn0%26_nc_ht%3Dinstagram.feoh3-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DRUb5P_-daJAAb4qXGtn%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMzM1MzA5MzcxNTA1OTgxMTk2MQ%253D%253D.2-ccb7-5%26oh%3D00_AfBVCAjAxn91LOkPXNdh5u7vh5CTx_Vo_iFFtKlcsQGT0A%26oe%3D662AF5F8%26_nc_sid%3D982cc7&__sig=7s3vZGnfsg2m89p2Jr5ykQ&__expires=1713970049",
            posts: [
                { url: "https://media.igram.world/get?__sig=YECAo7GHV1OJfY3iH2X0iw&__expires=1714025905&uri=https%3A%2F%2Fscontent-muc2-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F434275611_1054513718946372_5410344142029961659_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080%26_nc_ht%3Dscontent-muc2-1.cdninstagram.com%26_nc_cat%3D1%26_nc_ohc%3DWto-3br3R5sQ7kNvgGalk8r%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfDwKciMXYUSB1YfLgihnVWLah4ktN8ko7KPgE3dXTPHlQ%26oe%3D662EFE5C%26_nc_sid%3D8b3546", likes: Math.floor(Math.random() * 10000 ),  caption: getRandomCaption() , hashtags: getRandomHashtags()  },
                { url: "https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fsfn7-1.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F387080408_18316926373108947_2810900603704504227_n.jpg%3Fstp%3Ddst-jpg_e35%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTUyeDIwNDguc2RyLmYzMDgwOCJ9%26_nc_ht%3Dinstagram.fsfn7-1.fna.fbcdn.net%26_nc_cat%3D103%26_nc_ohc%3DBSxiMBZzrS0Ab629Qvr%26edm%3DANmP7GQAAAAA%26ccb%3D7-5%26ig_cache_key%3DMzIxMDM4MDcxMDU3NzUwNzcxOQ%253D%253D.2-ccb7-5%26oh%3D00_AfCaStkX69zf0CyqoMx9wp-6ZsxU7dS2ZwHEpCHtOhOXsA%26oe%3D662BE97B%26_nc_sid%3D982cc7&__sig=EWtCN-G1rz3pUisJSqbRtQ&__expires=1714026009", likes: Math.floor(Math.random() * 100000 ), caption: getRandomCaption() , hashtags: getRandomHashtags()  },
                { url: "https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fsfn7-1.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F387045810_18316926145108947_7773365414455680423_n.jpg%3Fstp%3Ddst-jpg_e35%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTUyeDIwNDguc2RyLmYzMDgwOCJ9%26_nc_ht%3Dinstagram.fsfn7-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DshxhcK5GmzUAb6-jJZB%26edm%3DANmP7GQAAAAA%26ccb%3D7-5%26ig_cache_key%3DMzIxMDM3ODcyNzgzNzY3MjEyMA%253D%253D.2-ccb7-5%26oh%3D00_AfAmAEQU7R_ovovOh-9Lt4KbtgRh9zs0WX0C0tB4AfL50w%26oe%3D662BBA3E%26_nc_sid%3D982cc7&__sig=s3MMEwOpZcx8fnqzJEXZlQ&__expires=1714026009", likes: Math.floor(Math.random() * 10000 ), caption: getRandomCaption() , hashtags: getRandomHashtags()  }
            ]
        },
        {
            user: "tarun_kinra",
            fullname:"Tarun Kinra",
            bio:"",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fcmn3-2.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F440346101_449168287601565_334364880840724502_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fcmn3-2.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DWzUNKDqNn68Ab56vT7D%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfDE-Q9z254OqLsCcc2LcDrzv2_jbzAV8yRU2024SaII5g%26oe%3D662EDD91%26_nc_sid%3D1e20d2&__sig=e41OtIXEx5lNR6cFudPcog&__expires=1713970112",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fgye4-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F317635411_207892085028744_7357750619797320049_n.jpg%3Fstp%3Ddst-jpg_e35%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjkweDIyOTMuc2RyLmYyOTM1MCJ9%26_nc_ht%3Dinstagram.fgye4-1.fna.fbcdn.net%26_nc_cat%3D100%26_nc_ohc%3DnRLho2AdflgQ7kNvgEbY_Qp%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMjk4Mzc3OTY4NTgzNjIzMTYzNA%253D%253D.2-ccb7-5%26oh%3D00_AfBm7WiapAg6jzESYGHp7rIuMIiZhd5hb3rbfn_WN7b1_A%26oe%3D662B0561%26_nc_sid%3D982cc7&__sig=cTC1fACIuAdwnmglzRmfMw&__expires=1713970135",
            posts: [
                { url: "https://i.pinimg.com/originals/d6/dd/0d/d6dd0d481cd43c56c3fceb7ba793dd73.jpg", likes: Math.floor(Math.random() * 1000000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags()  },
                { url: "https://i.pinimg.com/originals/6e/cf/e4/6ecfe4384f45b108fda4d35d04f8d79e.jpg", likes: Math.floor(Math.random() * 10000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/736x/b6/70/51/b670519c20c91db06c09536963f9cb82.jpg", likes: Math.floor(Math.random() * 1000000 ) ,caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "riyaz.14",
            fullname:"Riyaz Aly",
            bio:"Business: @underdogdigitall",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fgig14-2.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F429844097_1143681836802262_3052453647705256685_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fgig14-2.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DAXnBkeUF1-wAb6XADUN%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfC5QWCTfcrKv50lfi3Yt8W531NU-oJPqsbu2p3lIgqcwg%26oe%3D662DFD53%26_nc_sid%3D1e20d2&__sig=tjCUBy2xifF0y-lRV-vxuQ&__expires=1713970480",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Fscontent-gig4-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F440217919_3813403675650037_5275153525626857410_n.jpg%3Fstp%3Ddst-jpg_e15%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjkweDIyOTMuc2RyLmYyOTM1MCJ9%26_nc_ht%3Dscontent-gig4-1.cdninstagram.com%26_nc_cat%3D1%26_nc_ohc%3DuGt9aAREZEUAb4cJPur%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMzM1Mjg4NjEyMDE0NzI3MjQ1Mg%253D%253D.2-ccb7-5%26oh%3D00_AfCdlhsJiGZPinB2Fq_r3o2eoPNck7j13pw041-fZpOCBg%26oe%3D662AC23D%26_nc_sid%3D982cc7&__sig=INGX3GBo5lO0UE8ZBDMCPg&__expires=1713970483",
            posts: [
                { url: "https://i.pinimg.com/736x/4f/34/c2/4f34c2e9871551492cfcf1028cae7b73.jpg", likes: Math.floor(Math.random() * 1000 ) ,caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/1200x/ef/03/70/ef03701ef195a4da132752f06f11779f.jpg", likes: Math.floor(Math.random() * 100000 ) ,caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/736x/1c/98/fc/1c98fcc0fe6dde3e02e25ed8f600ac42.jpg", likes: Math.floor(Math.random() * 10000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "suhanakhan2",
            fullname:"Suhana Khan",
            bio:"Suhana Khan",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.ffbe4-1.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F274045082_476454167390667_7846910711129468586_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.ffbe4-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3Dg-R_TLjNyVIAb4ENp7P%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfBzqximCEQQMdk4-UC8iWFOle106QaWnmu5kpUi-tdQ4w%26oe%3D662ED208%26_nc_sid%3D1e20d2&__sig=l43kxzKIBxvpG85vlYOK_g&__expires=1713970578",
            story:"https://media.igram.world/get?__sig=SQ-vdaOgo9Vk6C_hakALfw&__expires=1713970581&uri=https%3A%2F%2Finstagram.fdac136-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F437590191_776774827745604_746936577119659902_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080%26_nc_ht%3Dinstagram.fdac136-1.fna.fbcdn.net%26_nc_cat%3D100%26_nc_ohc%3Dqi8hoWfXZi4Ab7C_N8A%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfA4iBcJOMP0oQFF4hgX8Po2lfhCxVwGmLIMTsWyT3VTcg%26oe%3D662E5D32%26_nc_sid%3D8b3546",
            posts: [
                { url: "https://i.pinimg.com/736x/ed/d1/66/edd1662b6174f0460435247aa5b24b52.jpg", likes: Math.floor(Math.random() * 10000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://www.informalnewz.com/wp-content/uploads/2023/10/Suhana-Khan-2-1200x900.jpg", likes: Math.floor(Math.random() * 100000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/736x/44/c5/69/44c5694f87f9f1e3cd96f95902555fe0.jpg", likes: Math.floor(Math.random() * 1000000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "deepikapadukone",
            fullname:"दीपिका पादुकोण",
            bio:"Follow Your Bliss…",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fyei6-4.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F367517427_983073526446920_8281327032185875411_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fyei6-4.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3D1McJWWSuJuIAb5wvgfk%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfAOSQGiwxtT6rtT0dd1x7YiGpSD6KiRQmQBTWgO1UDw0Q%26oe%3D662DBD63%26_nc_sid%3D1e20d2&__sig=idsQNm87vU-BWwxpY9fLWQ&__expires=1713970707",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fmnl30-3.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F334789463_6095060080574596_1222772754836766176_n.jpg%3Fstp%3Ddst-jpg_e35%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjkweDIyOTMuc2RyLmYyOTM1MCJ9%26_nc_ht%3Dinstagram.fmnl30-3.fna.fbcdn.net%26_nc_cat%3D104%26_nc_ohc%3DMpBYg9dZ7NsAb4kR98L%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMzA1NzE1NDUwMzAzMTg4MzQ1OA%253D%253D.2-ccb7-5%26oh%3D00_AfBRYRGtOYUNa2MPxKfOZKYA-6eyow1Uxj6cB2KMudSp7Q%26oe%3D662B12C9%26_nc_sid%3D982cc7&__sig=AZtgFzdxXF214_Wz0H_ZwQ&__expires=1713970735",
            posts: [
                { url: "https://i.pinimg.com/736x/b0/ff/b9/b0ffb9b9c300a26af6a9a3112938b501.jpg", likes: Math.floor(Math.random() * 10000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/564x/3c/3c/19/3c3c1991673232795efc1075680bf81a.jpg", likes: Math.floor(Math.random() * 1000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://www.weddingplz.com/blog/wp-content/uploads/1680445866006-682x1024.jpg", likes: Math.floor(Math.random() * 100000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "fukra_insaan",
            fullname:"ABHISHEK MALHAN",
            bio:"🐼 Gang",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Fscontent-los2-1.cdninstagram.com%2Fv%2Ft51.2885-19%2F419299413_7052811714796840_1223001037990943955_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dscontent-los2-1.cdninstagram.com%26_nc_cat%3D1%26_nc_ohc%3Dg2o5F_cNeZUAb6RrWAK%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfB4rE85nE8nXpjZ9jvZWMnFP4l2HvMrAHh1YOSg0zNepg%26oe%3D662DA430%26_nc_sid%3D1e20d2&__sig=i5yJfsMMjpJ0HrspYQi2zQ&__expires=1713970798",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fmel7-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F440249428_350567871353396_4440557252991397031_n.jpg%3Fstp%3Ddst-jpg_e15%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIuZjI5MzUwIn0%26_nc_ht%3Dinstagram.fmel7-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DLvvDY-gEzEkAb5tlIf8%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMzM1Mjc0OTE1Njc5Mzk0OTk4Mw%253D%253D.2-ccb7-5%26oh%3D00_AfBhhsdP-MtWTuEn6jGhf9fe4F55ulgHnU__HvZLJQWj1g%26oe%3D662AB618%26_nc_sid%3D982cc7&__sig=RUgkVmf7vLVcVj6Mw6SXmA&__expires=1713970798",
            posts: [
                { url: "https://i.pinimg.com/736x/dd/39/af/dd39af4be824d21ccdcd0570fa69c2b3.jpg", likes: Math.floor(Math.random() * 10000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/originals/36/33/52/363352f8f6e875befba4db024cbafa29.jpg", likes: Math.floor(Math.random() * 1000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/474x/92/48/de/9248de4f52e29c044aa53b95527cb4e3.jpg", likes: Math.floor(Math.random() * 100000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "cskfansofficial",
            fullname:"Whistle Podu Army - CSK Fan Club",
            bio:"Whistlepodu Army,  Fan Club bringing all the #CSK superfans together. Spreading #yellove everywhere we go!💛🦁",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fmdq7-1.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F434681762_922500129604842_8428594920349298771_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fmdq7-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DgQAOSwcNZAcQ7kNvgF2EBu2%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfDpRrNRwtqSXMW3U80_QbsdfhELErHrQh87AXDUgYNJJA%26oe%3D662D94DD%26_nc_sid%3D1e20d2&__sig=ahGP6UluvJI6qAqXH9PT4A&__expires=1713970924",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Fscontent-waw2-2.cdninstagram.com%2Fv%2Ft51.29350-15%2F106094394_941014623003479_5574840562067103297_n.jpg%3Fstp%3Ddst-jpg_e35%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjQyeDIyMDguc2RyLmYyOTM1MCJ9%26_nc_ht%3Dscontent-waw2-2.cdninstagram.com%26_nc_cat%3D111%26_nc_ohc%3DeSUraIlJoVIAb4VNKvR%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMjM0Nzc1MzQ5OTE4MzY0MzU3NQ%253D%253D.2-ccb7-5%26oh%3D00_AfBNACsCKrAcEFAbucqLUXWRW_VLL5MUdtdZSP7EkqQEIA%26oe%3D662B0BF5%26_nc_sid%3D982cc7&__sig=eRzhRb9ZooDzF7zP3Rh7WQ&__expires=1713970976",
            posts: [
                { url: "https://i.pinimg.com/736x/e8/7d/78/e87d78410e25ca2ae09e50ccf5dd2325.jpg", likes: Math.floor(Math.random() * 1000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/736x/58/24/cb/5824cbf86b47209a6f73ab13ed507921.jpg", likes: Math.floor(Math.random() * 100000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/1200x/aa/f0/f1/aaf0f17e7bd38edabc84b90488b0a162.jpg", likes: Math.floor(Math.random() * 10000000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "anjimaxuofficially",
            fullname:"Anjali Arora",
            bio:"हिंदू 🚩",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fupg6-1.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F427561635_394044479907205_2937304158349031755_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fupg6-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3D2oGb8E_3lzgAb7ad_QU%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfCpFVjC78uheGPZzj4uzBnNXwYt9nYS8z7Lf2s3RayPoQ%26oe%3D662E6E39%26_nc_sid%3D1e20d2&__sig=R3NUYjPJgJTlbHj0SK2kPg&__expires=1713971024",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.frdp4-1.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F440312036_18310169002159138_3092822156630344144_n.jpg%3Fstp%3Ddst-jpg_e35%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTUyeDIwNDguc2RyLmYzMDgwOCJ9%26_nc_ht%3Dinstagram.frdp4-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DjaLVcqv8dfoAb6z-whe%26edm%3DANmP7GQAAAAA%26ccb%3D7-5%26ig_cache_key%3DMzM1MjY2NzUzNTUzODMzOTM4Mw%253D%253D.2-ccb7-5%26oh%3D00_AfBSuPcAu6KnE2rxDO4KKOm8w183VL9ooSn8wO8H23teJA%26oe%3D662AED12%26_nc_sid%3D982cc7&__sig=yWEtYk7vbqwTJoq-YaKKjw&__expires=1713971027",
            posts: [
                { url: "https://i.pinimg.com/736x/4f/d2/84/4fd284e544359ab2995e64e8b50a22ea.jpg", likes: Math.floor(Math.random() * 1000000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/736x/4c/42/39/4c42394358e91afd8fd5e335b89fab66.jpg", likes: Math.floor(Math.random() * 100000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/736x/e1/40/5f/e1405f371420f16d2b72d267bc029031.jpg", likes: Math.floor(Math.random() * 1000000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "pranjal_dahiya_",
            fullname:"PRANJAL DAHIYA",
            bio:" Believe in yourself, and the world will believe ❤️",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Fscontent-tpe1-1.cdninstagram.com%2Fv%2Ft51.2885-19%2F439526688_1495884947944033_8368801689104268707_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dscontent-tpe1-1.cdninstagram.com%26_nc_cat%3D1%26_nc_ohc%3DDGB8OeW3U-kAb6rJSv9%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfD_MYsxHDorgBLNwhdyXDnXYpTAnZm4i4xsTePxFR9wXA%26oe%3D662EED42%26_nc_sid%3D1e20d2&__sig=AZ6qe6PZmGS7cpK304ktcw&__expires=1713971103",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Fscontent-fra3-2.cdninstagram.com%2Fv%2Ft51.29350-15%2F440409974_940796444198400_4266596606117425788_n.jpg%3Fstp%3Ddst-jpg_e15%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIuZjI5MzUwIn0%26_nc_ht%3Dscontent-fra3-2.cdninstagram.com%26_nc_cat%3D1%26_nc_ohc%3D1zMtVfsllq4Ab59Ppyo%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMzM1MzA2MDI4MjM0NTUxMTQwMg%253D%253D.2-ccb7-5%26oh%3D00_AfCMp3yTUzY6_c-zxGXMjUqgDxE_zT8Jqe3eO45XHX1w9g%26oe%3D662AD92C%26_nc_sid%3D982cc7&__sig=xPiyj-DgJ4C8UKOyQZ2juw&__expires=1713971103",
            posts: [
                { url: "https://www.gethucinema.com/wp-content/uploads/2023/12/PranjalDahiya-48.jpg", likes: Math.floor(Math.random() * 100000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/736x/ae/5c/c9/ae5cc9ee39a2c78f7c8a00370d47123f.jpg", likes: Math.floor(Math.random() * 10000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://i.pinimg.com/474x/f2/fa/e8/f2fae874530bc8743e3882bf8d9f88cd.jpg", likes: Math.floor(Math.random() * 1000000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "shweta.tiwari",
            fullname:"Shweta Tiwari",
            bio:"Proudest mom and hardworking actor. I am NOT on Twitter & Facebook. ",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fpoa13-1.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F20902176_750261961820324_9109745855245582336_a.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fpoa13-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DRBnIbXk0brYAb45xNsQ%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfBOxaapoSq3OzZ6ymRB2QwucZQ9CtKt4ZQG_133jt2SkA%26oe%3D662EDD72%26_nc_sid%3D1e20d2&__sig=-qRwboLzUmCpCE5oR69qwg&__expires=1713971187",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fsaw2-2.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F439966530_417658364320429_4050565826274691152_n.jpg%3Fstp%3Ddst-jpg_e35%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjg0eDIyODIuc2RyLmYyOTM1MCJ9%26_nc_ht%3Dinstagram.fsaw2-2.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DaaYNyG9EmsAAb5kgsVF%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMzM1MzE0MzgwNjI4MTUwMzYxNA%253D%253D.2-ccb7-5%26oh%3D00_AfByEeFxdTUrTm4gIpdhgzGACEDmqawOKsQyOihxRCVjgg%26oe%3D662AE867%26_nc_sid%3D982cc7&__sig=UV2AlIzrxRCmaseAL4_Esw&__expires=1713971186",
            posts: [
                { url: "https://images.infoseemedia.com/wp-content/uploads/2022/10/Shweta-Tiwari-Smile-Photo-819x1024.jpg", likes: Math.floor(Math.random() * 10000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://images.infoseemedia.com/wp-content/uploads/2022/10/Shweta-Tiwari-Smile-Image.jpg", likes: Math.floor(Math.random() * 10000000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://images.infoseemedia.com/wp-content/uploads/2022/10/Shweta-Tiwari-Saree-Look.jpg", likes: Math.floor(Math.random() * 10000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "alwaysramcharan",
            fullname:"Ram Charan",
            bio:"Actor",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fcpq2-1.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F65305399_317802229124611_4675353660140552192_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fcpq2-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DrZucDtj0ZyMQ7kNvgFM7jJ8%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfBVNkR0yWi5-5vP4NJW2-6kjE13u8CiEvxpwD036899Lw%26oe%3D662EFA45%26_nc_sid%3D1e20d2&__sig=RHv-O1CNzNe8l81c9zxkVA&__expires=1713971268",
            story:"https://media.igram.world/get?__sig=gxp_9StbvsHvjPrjQZDRLw&__expires=1713971268&uri=https%3A%2F%2Finstagram.flpq1-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F434522019_788477829865827_6101225197544029530_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080%26_nc_ht%3Dinstagram.flpq1-1.fna.fbcdn.net%26_nc_cat%3D103%26_nc_ohc%3DeU5KCdVPOMgAb5SPZ5O%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfCoXKlDpiXbFA_ZA-_ja541V7sgx8--XSd-EDZ_FlbsBg%26oe%3D662DBFB7%26_nc_sid%3D8b3546",
            posts: [
                { url: "https://images.infoseemedia.com/wp-content/uploads/2022/09/Ram-Charan-Image-4-768x1150.jpg", likes: Math.floor(Math.random() * 10000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://images.infoseemedia.com/wp-content/uploads/2022/09/Ram-Charan-Image-13.jpg", likes: Math.floor(Math.random() * 100000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://images.infoseemedia.com/wp-content/uploads/2022/09/Ram-Charan-Image-14.jpg", likes: Math.floor(Math.random() * 1000000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
        {
            user: "masabagupta",
            fullname:"Masaba 🤎",
            bio:"The Masaba Bride • Chameleon",
            dp:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fval1-1.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F438767065_434373795909602_5690777531821199143_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fval1-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3DrpHDCSw9nBYAb4ZsZs3%26edm%3DAEF8tYYBAAAA%26ccb%3D7-5%26oh%3D00_AfALS0Us3dY9yG7LUW4m-u5U9lHT2mT0SqyP3uiChTWlaA%26oe%3D662EECC2%26_nc_sid%3D1e20d2&__sig=Jpt_AzMeaZvoYmcz8dO4NA&__expires=1713971346",
            story:"https://media.igram.world/get?uri=https%3A%2F%2Finstagram.fcpq16-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F437949994_807704274754378_9054262185535558923_n.jpg%3Fstp%3Ddst-jpg_e35%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjkweDIyOTMuc2RyLmYyOTM1MCJ9%26_nc_ht%3Dinstagram.fcpq16-1.fna.fbcdn.net%26_nc_cat%3D1%26_nc_ohc%3Dvi5ArSs0gLsAb46ORTm%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMzM1MzE4MTM1NzU3MzU5NjM2OQ%253D%253D.2-ccb7-5%26oh%3D00_AfA7-_JVISGxEpybEB-cNXQBBqEjiFmPH7aA0JnA6kx7nA%26oe%3D662B0DB0%26_nc_sid%3D982cc7&__sig=gMC0Vs8FhF9I8sMBIVQrlw&__expires=1713971346",
            posts: [
                { url: "https://images.infoseemedia.com/wp-content/uploads/2023/07/Bella-Hadid-Simplycity-1536x1193.jpg", likes: Math.floor(Math.random() * 100000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://images.infoseemedia.com/wp-content/uploads/2023/07/Bella-Hadid-Photo-1536x1281.jpg", likes: Math.floor(Math.random() * 10000000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() },
                { url: "https://images.infoseemedia.com/wp-content/uploads/2023/07/Bella-Hadid-Face-Expression-1536x1316.jpg", likes: Math.floor(Math.random() * 1000 ) , caption: getRandomCaption() , hashtags: getRandomHashtags() }
            ]
        },
    ];
    function getRandomCaption() {
        const captions = [
            "Embark on a journey into the colors and richness of India! 🌈 Discover beauty within and see the world through your eyes. 🌍",
            "Explore the mysterious and ancient cities of India. 🏰 Awaken the traveler within and unearth treasures of history. 🗺️",
            "Venture into the tranquility and greenery. 🌿 A splendid journey to special places for nature lovers. 🌳",
            "Balance your life with spirituality. 🙏 A new journey through experiences of yoga and meditation. 🧘",
            "Get lost in the romance of India. 💑 Tales of love and adventure in Rajasthan. 💞",
            "Immerse yourself in the vibrant lanes of Indian markets. 🛍️ Enjoy local artists' designs and their stories. 🎨",
            "Get lost in the rays of the sun. 🌞 A journey to Himalayan beauty spots and sunrises. 🏔️",
            "A journey outside India with an Indian teenager. 🚀 Their first steps into a world journey. 🌏",
            "Experience the tranquility of riverside escapes. 🌊 Discover hidden gems and unwind in nature's embrace. 🌿",
            "Celebrate the vibrancy of Indian festivals. 🎉 Immerse in colors, music, and joyous traditions. 🌈",
            "Captivate your senses with Indian flavors. 🍲 A culinary journey through diverse tastes and spices. 🌶️",
            "Indulge in the charm of rural life. 🌾 Discover simplicity, community, and heartwarming experiences. 🏡",
            "Explore the magic of Indian art and craftsmanship. 🎨 Marvel at intricate designs and cultural expressions. ✨",
            "Experience the grandeur of ancient forts and palaces. 🏰 Dive into history and architectural wonders. 🏛️",
            "Discover the beauty of Indian landscapes. 🌄 From rolling hills to serene beaches, nature's wonders await. 🏖️",
            "Unleash the adventurer within. 🌍 Embark on thrilling experiences and global explorations. 🗺️",
            "Savor the sweetness of Indian desserts. 🍰 Dive into a world of flavors and culinary delights. 🍬",
            "Appreciate the grace of classical dance forms. 💃 Witness performances that embody culture and elegance. 🎭",
            "Explore the colors and patterns of Indian fashion. 👗 Embrace traditional attire and modern trends. 💄",
            "Connect with the warmth of Indian hospitality. 🤗 Experience traditions, kindness, and cultural richness. 🏠",
            "Marvel at the wonders of Indian wildlife. 🦁 Explore diverse ecosystems and encounter majestic creatures. 🐅",
        ];
        return captions[Math.floor(Math.random() * captions.length)];
    }
    function getRandomHashtags() {
        const hashtags = [
            "#TravelDiaries #FoodieLife #FitnessGoals #MotivationMonday #Fashionista",
            "#GamingCommunity #BookLoverReads #MovieBuffLife #TechGeeky #EntrepreneurLife",
            "#NaturePhotography #ArtisticSoul #MusicLoverVibes #PetLoverLife #SelfieTimeFun",
            "#ThrowbackThursdayVibes #WorkoutMotivation #HealthyLivingJourney #DIYProjectsInspiration #CookingAdventures",
            "#AdventureSeeker #Wanderlust #InspirationalQuotesDaily #LifeHacks #MindfulnessJourney",
            "#YogaJourney #PositiveVibesOnly #CommunityLove #AnimalRightsAdvocate #GreenLivingTips",
            "#SupportLocalBusinesses #OnlineLearning #FitnessJourney #TravelInspiration #ProductivityHacks",
            "#HomeDecorInspo #PlantParenting #FashionTrends #TechInnovations #MotivationalSpeakerLife",
            "#FilmEnthusiast #EnvironmentalActivist #ArtistOnInstagram #MusicFestivalLover #PetAdoptionAdvocate",
            "#ThrowbackMoments #GymLife #HealthyRecipesIdeas #CraftingIdeas #OutdoorAdventures",
            "#BeautyEnthusiast #MindsetMatters #RelationshipGoals #CoffeeLover #MorningRoutineInspiration",
            "#FoodPhotography #AdventureTime #DigitalNomadLife #EntrepreneurMindset #CreativityEveryday",
            "#HealthyHabits #TechAddict #MotivationForDays #DailyInspiration #MindsetShift",
            "#GymMotivation #FashionStyle #TechSavvyLife #MotivationalQuotes #LifeLessonsLearned",
            "#CreativeMinds #AdventureAwaits #Innovation #TechLife #FitnessFreak",
            "#FoodHeaven #ExploreMore #DigitalMarketing #InspireOthers #HealthyChoices",
            "#TechGadgets #MotivationNation #DailyHustle #HealthyEating #OutdoorLife",
            "#FashionDesign #TechNews #SelfImprovement #CookingTime #AdventureCalls",
            "#BeautyTrends #MindfulnessPractice #RelationshipBuilding #CoffeeTime #MorningVibes",
            "#FoodLover #OutdoorLifeStyle #EntrepreneurialSpirit #CreativityUnleashed #HealthyLivingTips",
            "#TechWorld #MotivationQuotes #DailyInspire #LifeGoals #CreativeJuicesFlowing",
            "#GymLifeStyle #FashionTrends #TechEnthusiast #MotivationEveryday #MindsetMattersMost",
            "#CreativeJourney #AdventureTravel #InnovativeThinking #TechObsessed #FitnessGoals",
            "#FoodJunkie #ExploreNature #DigitalNomadLife #EntrepreneurLifeStyle #CreativityAtWork",
            "#HealthyRecipesIdeas #TechInnovation #MotivationMondayVibes #DailyInspirationQuotes #LifeLessonsLearned",
            "#CreativeIdeas #AdventureSeeker #InnovationNation #TechLifeStyle #FitnessFreak",
            "#FoodieForLife #ExploreMorePlaces #DigitalMarketingTips #InspireOthersDaily #HealthyChoicesEveryDay",
            "#TechGadgetsLover #MotivationNation #DailyHustleQuotes #HealthyEatingHabits #OutdoorLifeStyle",
            "#FashionDesigners #TechNewsUpdate #SelfImprovementJourney #CookingTimeIsFun #AdventureIsOutThere",
            "#BeautyTrends #MindfulnessPracticeDaily #RelationshipBuildingGoals #CoffeeTimeIsHappyTime #MorningVibesDaily",
            "#FoodLoversUnite #OutdoorLifeLovers #EntrepreneurialSpirit #CreativityUnleashed #HealthyLivingTipsAndTricks"
        ];
        return hashtags[Math.floor(Math.random() * hashtags.length)];
    }
{
     var cluttersearchusers = "";
    const randomIndex = Math.floor(Math.random() * profiledata.length);
        const randomUser = profiledata[randomIndex];
        if (randomUser && randomUser.user && randomUser.fullname && randomUser.dp) {
        const userData = {
            username: randomUser.user,
            fullname: randomUser.fullname,
            dp: randomUser.dp,
            story: randomUser.story
        };
        const userProfileHTML = `
        <div id="user-id-section-info">
            <img src="${userData.dp}" alt="${userData.fullname}'s Profile Picture">
            <div id="user-id-section-names">
                <h4>@${userData.username}</h4>
                <p>${userData.fullname}</p>
            </div>
        </div>
    `;
            cluttersearchusers += userProfileHTML;
        document.getElementById("user-id-section").innerHTML = cluttersearchusers;
    }
}
{
    var cluttersearchusers = "";
    const randomIndex = Math.floor(Math.random() * profiledata.length);
        const randomUser = profiledata[randomIndex];
        if (randomUser && randomUser.user && randomUser.fullname && randomUser.dp) {
        const userData = {
            username: randomUser.user,
            fullname: randomUser.fullname,
            dp: randomUser.dp,
            story: randomUser.story
        };
        const userProfileHTML = `
        <div id="user-id-section-info">
            <img src="${userData.dp}" alt="${userData.fullname}'s Profile Picture">
            <div id="user-id-section-names">
                <h4>@${userData.username}</h4>
                <p>${userData.fullname}</p>
            </div>
        </div>
    `;
            cluttersearchusers += userProfileHTML;
        document.getElementById("user-id-section-2").innerHTML = cluttersearchusers;
    }
}
{
    var cluttersearchusers = "";
    const randomIndex = Math.floor(Math.random() * profiledata.length);
        const randomUser = profiledata[randomIndex];
        if (randomUser && randomUser.user && randomUser.fullname && randomUser.dp) {
        const userData = {
            username: randomUser.user,
            fullname: randomUser.fullname,
            dp: randomUser.dp,
            story: randomUser.story
        };
        const userProfileHTML = `
        <div id="user-id-section-info">
            <img src="${userData.dp}" alt="${userData.fullname}'s Profile Picture">
            <div id="user-id-section-names">
                <h4>@${userData.username}</h4>
                <p>${userData.fullname}</p>
            </div>
        </div>
    `;
            cluttersearchusers += userProfileHTML;
        document.getElementById("user-id-section-3").innerHTML = cluttersearchusers;
    }
}
{
    var cluttersearchusers = "";
    const randomIndex = Math.floor(Math.random() * profiledata.length);
        const randomUser = profiledata[randomIndex];
        if (randomUser && randomUser.user && randomUser.fullname && randomUser.dp) {
        const userData = {
            username: randomUser.user,
            fullname: randomUser.fullname,
            dp: randomUser.dp,
            story: randomUser.story
        };
        const userProfileHTML = `
        <div id="user-id-section-info">
            <img src="${userData.dp}" alt="${userData.fullname}'s Profile Picture">
            <div id="user-id-section-names">
                <h4>@${userData.username}</h4>
                <p>${userData.fullname}</p>
            </div>
        </div>
    `;
            cluttersearchusers += userProfileHTML;
        document.getElementById("user-id-section-4").innerHTML = cluttersearchusers;
    }
}
{
    var cluttersearchusers = "";
    const randomIndex = Math.floor(Math.random() * profiledata.length);
        const randomUser = profiledata[randomIndex];
        if (randomUser && randomUser.user && randomUser.fullname && randomUser.dp) {
        const userData = {
            username: randomUser.user,
            fullname: randomUser.fullname,
            dp: randomUser.dp,
            story: randomUser.story
        };
        const userProfileHTML = `
        <div id="user-id-section-info">
            <img src="${userData.dp}" alt="${userData.fullname}'s Profile Picture">
            <div id="user-id-section-names">
                <h4>@${userData.username}</h4>
                <p>${userData.fullname}</p>
            </div>
        </div>
    `;
            cluttersearchusers += userProfileHTML;
        document.getElementById("user-id-section-5").innerHTML = cluttersearchusers;
    }
}
{
    var cluttersearchusers = "";
    const randomIndex = Math.floor(Math.random() * profiledata.length);
        const randomUser = profiledata[randomIndex];
        if (randomUser && randomUser.user && randomUser.fullname && randomUser.dp) {
        const userData = {
            username: randomUser.user,
            fullname: randomUser.fullname,
            dp: randomUser.dp,
            story: randomUser.story
        };
        const userProfileHTML = `
        <div id="user-id-section-info">
            <img src="${userData.dp}" alt="${userData.fullname}'s Profile Picture">
            <div id="user-id-section-names">
                <h4>@${userData.username}</h4>
                <p>${userData.fullname}</p>
            </div>
        </div>
    `;
            cluttersearchusers += userProfileHTML;
        document.getElementById("user-id-section-6").innerHTML = cluttersearchusers;
    }
}
}
);
const users = ['elvish_yadav', 'tarun_kinra', 'riyaz.14', 'suhanakhan2', 'deepikapadukone', 'fukra_insaan', 'cskfansofficial', 'anjimaxuofficially', 'pranjal_dahiya_', 'shweta.tiwari', 'alwaysramcharan', 'masabagupta'];
   function getValue(event) {
        if (event.key === "Enter") {
        var inputValue = document.getElementById('userSearchInput').value;
       users.forEach(username => {
    if(username === inputValue){
        console.log(username + " Found")
    }
});
}}
let clearall_userformsearch = document.querySelectorAll('#clearall');
clearall_userformsearch.forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('#user-id-section-colome').forEach(section => {
            section.style.display = 'none';
        });
    });
});
let delete_userformsearch = document.querySelectorAll('.delete-userformsearch');
let user_id_section = document.querySelectorAll('.user-id-section');
delete_userformsearch.forEach(button => {
    button.addEventListener('click', function() {
        // Find the corresponding user-id-section and hide it
        let parentSection = button.closest('#user-id-section-colome');
        parentSection.style.display = 'none';
    });
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
