let rotate

function rotate(l, n){

    console log(l(n) + l(n));
}


def contain_all_rots(strng, arr):
    if len(strng) == 0:
        return True
    i = 0
    while i < len(strng):
        if ''join(rotate(list(strng), i)) not in arr:
            return False
        i += 1
    return True


print(contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
