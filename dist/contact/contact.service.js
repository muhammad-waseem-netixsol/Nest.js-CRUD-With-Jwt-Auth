"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const contact_schema_1 = require("./schema/contact.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ContactService = class ContactService {
    constructor(contactModel) {
        this.contactModel = contactModel;
    }
    create(createContactDto) {
        try {
            const model = new this.contactModel();
            model.name = createContactDto.name;
            model.relationship = createContactDto.relationship;
            model.phoneNumber = createContactDto.phoneNumber;
            model.age = createContactDto.age;
            return model.save();
        }
        catch (err) {
            console.log(err);
        }
    }
    async findAll() {
        try {
            const contacts = await this.contactModel.find();
            return contacts;
        }
        catch (err) {
            console.log(err);
        }
    }
    async findOne(id) {
        try {
            const objId = new mongoose_2.Types.ObjectId(id);
            const contact = await this.contactModel.findById({ _id: objId });
            if (!contact) {
                throw new Error("You have passed invalid id!");
            }
            return contact;
        }
        catch (err) {
            console.log(err);
        }
    }
    async update(id, updateDto) {
        if (!Object.values(updateDto).some(value => value !== undefined)) {
            throw new common_1.BadRequestException('Empty body sent! Please add fields to update.');
        }
        const updatedContact = await this.contactModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
        if (!updatedContact) {
            throw new common_1.NotFoundException(`Contact with ID ${id} not found`);
        }
        return updatedContact;
    }
    async remove(id) {
        try {
            const obj = new mongoose_2.Types.ObjectId(id);
            const ctct = await this.contactModel.deleteOne({ _id: obj }).exec();
            if (ctct.deletedCount === 0) {
                throw new common_1.NotFoundException("Contact not found!");
            }
            else {
                return { message: "Contact not found!" };
            }
        }
        catch (err) {
            return { message: "Server is not availble for now.. Please try again later" };
        }
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(contact_schema_1.Contact.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContactService);
//# sourceMappingURL=contact.service.js.map