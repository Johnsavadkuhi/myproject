const mongoose = require('mongoose');

const notificationSettingsSchema = mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    freelancer_id: {
        type: mongoose.Types.ObjectId,
        ref: Freelancer
    },
    website_notification_play_sound: String,
    website_message_play_sound: String,
    user_follow: String,
    user_end_registration: String,
    user_employee_invitation: String,
    accountant_money_change: String,
    accountant_request_status: String,
    inivitation_discount_code: String,
    chat_offline_message: String,
    work_sample_status: String,
    website_monthly_news: String,
    website_weekly_news: String,
    website_promotions: String,
    project_acceptance_status: Boolean,
    project_status: Boolean,
    project_skill: String,
    contest_skill: String,
    project_change_bid: String,
    project_change_project: String,
    project_employer_create: String,
    bid_freelancer_acceptance: String,
    bid_new: String,
    bid_new_daily: String,
    bid_employer_acceptance: String,
    bid_employer_contest_acceptance: String,
    bid_employer_rate: String,
    bid_user_sample_work: String,
    desktop_status: Boolean,
    desktop_differences: String,
    desktop_share_file: String,
    desktop_change_price: Boolean,
    desktop_change_prepaid: Boolean,
    desktop_rate: String,
    created_at: Date,
    updated_at: Date

})

module.exports = mongoose.model("NotificationSettings", notificationSettingsSchema);