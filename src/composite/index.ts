import File from "./File";
import Folder from "./Folder";

const root = new Folder("root");
root.add(new File("a.txt", 1000));
root.add(new File("b.txt", 2000));

const sub1 = new Folder("sub1");
sub1.add(new File("sa.txt", 100));
sub1.add(new File("sb.txt", 4000));

root.add(sub1);

const subsub = new Folder("sub3");
sub1.add(subsub);
subsub.add(new File("subsub1.txt", 2250));
subsub.add(new File("subsub2.txt", 5340));

const sub2 = new Folder("sub2");
root.add(sub2);
sub2.add(new File("sub2A.txt", 250));
sub2.add(new File("sub2B.txt", 340));

const dom = document.querySelector("#list");
root.list(dom);
