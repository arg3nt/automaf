/**
 * Should be used as a return type when a function is called that may fail.
 */
export default class Status {
    /**
     * 
     * @param {int} status_code The canonical status code for the result.
     * @param {string} description A more detailed description.
     * @param {*} obj The returned output if the output is successful.
     */
    Status(status_code, description, obj) {
        this.code = status_code;
        this.description = description;
        this.obj = obj;
    }
}