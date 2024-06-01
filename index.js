const visitAILinks = () => {
  const listLength = document.querySelectorAll('[role="list"]').length;

  const links =
    document.querySelectorAll('[role="list"]')[2]?.children ||
    document.querySelectorAll('[role="list"]').item(listLength - 1).children;

  for (let i = 0; i < links.length; i++) {
    const nodeList = [];

    nodeList.push(links.item(i));
    const anchors = nodeList.map((node, i) => {
      return (
        node.children[0].children[0].children[0].children[0].children[0] ||
        undefined
      );
    });

    if (anchors) {
      anchors.forEach((anchor) => {
        console.log({ href: anchor.href });
        if (anchor.href) {
          window.open(anchor.href, "_blank");
        }
      });
    }
  }
};

setTimeout(visitAILinks, 3000);
