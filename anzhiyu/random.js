var posts=["2024/07/27/2024/AI/","2024/07/26/2024/搭建Hexo博客/","2024/07/26/2023/wwz.im/","2023/08/10/2023/Script/","2023/08/01/2023/alist/","2023/08/01/2023/AppleCMS/","2023/08/01/2023/NeZha/","2023/08/01/2023/NPM/","2023/04/30/2023/outline/","2023/04/22/2023/ZeroTier/","2023/04/21/2023/live/","2023/04/20/2023/x-ui/","2023/04/03/2023/ChatGPT/","2023/03/16/2023/ubuntu/","2023/02/28/2023/CF/","2023/02/19/2023/oracle/","2023/02/19/2023/AWS/","2022/12/19/2022/Xray/","2022/12/19/2022/ZZ/","2022/12/04/2022/WKY/","2022/07/23/2022/10video/","2022/07/12/2022/notion/","2022/02/19/2022/DiskGenisPro/","2021/12/21/2021/oracle/","2019/08/26/2019/FinalShellSSH/","2019/08/26/2019/v2ray/","2018/03/14/2018/Hexo使用指南/","2017/12/15/2017/12.15hexo博客图片问题/","2017/12/11/2017/12.11Markdown 语法手册/","2017/06/11/2017/12.11github-添加ssh/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };