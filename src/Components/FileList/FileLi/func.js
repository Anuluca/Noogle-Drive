export function switchTitle() {
  switch (this.props.routeName) {
    case "MyDisk":
      this.setState({
        title: "我的云端软盘",
      });
      break;
    case "ShareToMe":
      this.setState({
        title: "与我共享",
      });
      break;
    case "UsedRecently":
      this.setState({
        title: "最近用过",
      });
      break;
    case "Starred":
      this.setState({
        title: "已加星标",
      });
      break;
    case "Recycle":
      this.setState({
        title: "回收站",
      });
      break;
  }
}
