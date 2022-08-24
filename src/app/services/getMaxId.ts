import { ITask } from "./interfaces";

export function getMaxId(Array: Array<ITask>) {
    let ids = Array.map(t => t.id);
    let maxId = Math.max(...ids, 0) + 1;
    return maxId;
}