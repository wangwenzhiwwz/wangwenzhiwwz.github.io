var posts=["article/2024-08-08_Hysteria2/","article/2024-08-07_VPN/","article/2024-08-01_Linux/","article/2024-7-27_AI/","article/2024-07-27_Markdown 语法手册/","article/2024-07-27_github-添加ssh/","article/2024-7-26_搭建Hexo博客/","article/2024-07-26_wwz.im/","article/2024-7-22_ZeroTier/","article/2023-8-10_Script/","article/2023-8-1_alist/","article/2023-8-1_AppleCMS/","article/2023-8-1_NeZha/","article/2023-8-1_NPM/","article/2023-4-30_outline/","article/2023-4-21_live/","article/2023-4-20_x-ui/","article/2023-04-03_ChatGPT/","article/2023-02-28_CF/","article/2023-02-19_oracle/","article/2023-2-19_AWS/","article/2022-12-19_Xray/","article/2022-12-19_IPtables/","article/2022-12-4_WKY/","article/2022-7-23_10_video/","article/2022-7-12_notion/","article/2022-2-19_DiskGenisPro/","article/2021-12-21_oracle/","article/2019-08-26_FinalShellSSH/","article/2019-08-26_v2ray/","article/2018-03-14_Hexo使用指南/","article/2017-12-15_hexo博客图片问题/"];function toRandomPost(){
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