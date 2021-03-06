<script>
import BaseFormDialog from "@/views/base/BaseFormDialog.vue";
import BaseAPI from "@/api/BaseAPI";

let SAVE_CONFIG = {
  Create: {
    method: "post",
    message: "Created Successfully",
  },
  Edit: {
    method: "put",
    message: "Updated Successfully",
  },
  Duplicate: {
    method: "post",
    message: "Created Successfully",
  },
};

/**
 * Form dialog handles create, edit, duplicate, view item
 */
export default {
  name: "BaseFormDetail",
  extends: BaseFormDialog,
  props: {
    /**
     * status of form (view/edit/create)
     */
    formStatus: {
      type: String,
      default: "View",
    },
    /**
     * selected item passed from the form list
     */
    // selectedItem: {
    //   type: Object,
    //   default: function () {
    //     return {};
    //   },
    // },
  },
  computed: {
    /**
     * if status of form is view, all the editable field will be disable
     */
    isViewing() {
      return this.formStatus === "View";
    },
    /**
     * title of the dialog
     */
    title() {
      let mapStatus = {
        View: "View",
        Edit: "Edit",
        Create: "Create new",
        Duplicate: "Duplicate",
      };
      let prefix = mapStatus[this.formStatus];
      return `${prefix} ${this.formName}`;
    },
    /**
     * @override
     */
    formName() {
      return "";
    },
    /**
     * @override
     */
    validationContainer() {
      return this.$refs["dataForm"];
    },
    formDetail() {
      return this.$refs[this.formDetailName];
    },
  },
  data() {
    this.api = this.getApi();
    this.selectedItem = Object.create(null);
    return {
      currentItem: {},
      /**
       * store of form list
       */
      store: null,
      /**
       * Owner form in case of quickAdd
       */
      ownerForm: null,
      loading: false,
      processing: false,
    };
  },
  methods: {
    show(options = {}) {
      this.formStatus = options.formStatus || 'View';
      this.setSelectedItem(options.selectedItem);
      // this.resetForm();
      // this.resetValidation();
      // this.resetErrors();
      switch (this.formStatus) {
        case "Create":
          this.create();
          break;
        case "Edit":
          this.edit();
          break;
        case "Duplicate":
          this.duplicate();
          break;
        case "View":
        default:
          this.view();
          break;
      }
      this.isShow = true;
    },
    resetErrors() {},
    hide() {
      this.resetCurrentItem();
      this.close();
    },
    resetCurrentItem() {
      setTimeout(() => {
        this.currentItem = {};
      });
    },
    onButtonClick(command, data) {
      switch (command) {
        case "Save":
          this.save();
          break;
      }
    },
    cancel(event) {
      const self = this;
      let dirty = self.checkChanges();
      if (!dirty) {
        self.resetValidation();
        // if (this.store) {
        //   this.store.rejectChanges();
        // }
        self.dialogResult = 'Cancel';
        self.hide();
      } else {
        let answer = "No";
        switch (answer) {
          case 'Yes':
            if (event && !event.cancel) {
              event.cancel = true;
              self.onButtonClick('Save');
              self.resetValidation();
              self.dialogResult = 'Comfirm';
            }
            break;
          case 'No':
            self.resetValidation();
            // if (this.store) {
            //   this.store.rejectChanges();
            // }
            self.dialogResult = 'Cancel';
            self.hide();
            break;
          case 'Cancel':
            self.dialogResult = 'Cancel';
            // this.forcusFirstControl();
            break;
          default:
            break;
        }
      }
    },
    //#region CRUD
    /**
     * @override
     */
    getApi() {
      return new BaseAPI();
    },
    create() {
      this.resetForm();
      this.resetValidation();
      // this.show();
    },
    view() {
      this.setCurrentItem();
      this.resetValidation();
      // this.show();
    },
    duplicate() {
      this.setCurrentItem();
      this.resetValidation();
      // this.show();
    },
    edit() {
      this.setCurrentItem();
      this.resetValidation();
      // this.show();
    },
    setCurrentItem() {
      this.currentItem = Object.assign({}, this.selectedItem);
    },
    setSelectedItem(item) {
      this.selectedItem = Object.assign({}, item);
    },
    async handleConfirm() {
      await this.save();
    },
    async save() {
      const self = this;

      if (self.processing) {
        return;
      }

      self.processing = true;

      if (await this.validate()) {
        // NCThanh-TODO: show mask
        let config = SAVE_CONFIG[this.formStatus],
          payload = self.getPayloadForSave();
        let response = await self.api[config.method](payload);
        if (response && response.success) {
          this.$notify({
            title: "Success",
            message: config.message,
            type: "success",
            duration: 2000,
          });
        } else if (response && response.message) {
          this.$notify({
            title: "Error",
            message: response.message || "An error has occured",
            type: "danger",
            duration: 2000,
          });
        }
      }

      self.processing = false;
    },
    async validate() {
      return (
        (await this.validateContainer()) && (await this.validateBusiness())
      );
    },
    async validateContainer() {
      return await this.validationContainer.validate();
    },
    /**
     * @override
     */
    async validateBusiness() {
      return true;
    },
    getPayloadForSave() {
      return this.currentItem;
    },
    /**
     * return validation rules for base-form
     * @override
     */
    getFormRules() {
      return {};
    },
    resetValidation() {
      this.$nextTick(() => {
        let dataForm = this.$refs["dataForm"];
        if (dataForm) {
          dataForm.clearValidate();
        }
      });
    },
    /**
     * reset form to default
     * @override
     */
    resetForm() {
      this.currentItem = {};
    },
    //#endregion CRUD
    handleShortkeyAction(event) {
      switch (event.srcKey) {
        case "Save":
          if (this.isViewing) {
            this.close();
          } else {
            this.confirm();
          }
          break;
        case "Close":
          this.cancel();
          break;
      }
    },
    handleClose(done) {
      if (this.checkChanges()) {
        this.$confirm("Are you sure to close this dialog?")
          .then((_) => {
            done();
          })
          .catch((_) => {});
      } else {
        done();
      }
    },
    checkChanges() {
      switch (this.formStatus) {
        case "Create":
          return true;
        case "Edit":
          for (const key in this.selectedItem) {
            if (Object.hasOwnProperty.call(this.selectedItem, key)) {
              const element = this.selectedItem[key];
              if (element !== this.currentItem[key]) {
                return true;
              }
            }
          }
          return false;
        case "View":
        default:
          return false;
      }
    },
    /**
     * model of current entity
     * there is no store and modelin case of QuickAdd
     * @override
     */
    getCurrentStore() {
      return this.store || this.initStore();
    },
    initStore() {
      throw new Error("init store");
    },
    addHandler() {
      // this.addTableHandler();
    },
    addTableHandler() {
      if (this.tableContainer) {
        this.tableContainer.$on("filter", () => {});
        this.tableContainer.$on("loaded", () => {});
        this.tableContainer.$on("perPageChanged", () => {});
      }
    },
    removeHandler() {
      // this.removeTableHandler();
    },
    removeTableHandler() {
      if (this.tableContainer) {
        this.tableContainer.$off("filter", () => {});
        this.tableContainer.$off("loaded", () => {});
        this.tableContainer.$off("perPageChanged", () => {});
      }
    },
  },
  /**
   * remove all event listener before destroying the form
   */
  beforeDestroy() {
    this.removeHandler();
  }
};
</script>
