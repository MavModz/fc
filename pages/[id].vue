<template>
    <div>
        <component :is="currentComponent" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'home',
});
</script>

<script>
import AboutUs from './ExtraPages/about-us/index.vue'
import Benefitpage from './ExtraPages/Benefit-of-immigration-listing/index.vue'
import businessHome from './ExtraPages/immigration-business-growth/index.vue'
import contactus from './ExtraPages/contact-us/index.vue'
import crm from './ExtraPages/crm/index.vue'
import forconsultants from './ExtraPages/for-consultants/index.vue'
import foruser from './ExtraPages/for-user/index.vue'
import getapp from './ExtraPages/whitelabel-app/index.vue'
import PrivacyPolicy from './ExtraPages/PrivacyPolicy/index.vue'
import TermCondition from './ExtraPages/Terms-&-Condition/index.vue'
import TermofUse from './ExtraPages/TermofUse/index.vue'
import Terms from './ExtraPages/Terms/index.vue'
import Works from './ExtraPages/Works/index.vue'
import NotFound from './ExtraPages/NotFound/index.vue'
import CommingSoon from './ExtraPages/CommingSoon/index.vue'

export default {
    components: { NotFound, AboutUs, Benefitpage, businessHome, contactus, crm, forconsultants, foruser, getapp, PrivacyPolicy, TermCondition,TermofUse, Terms, Works, CommingSoon },
    computed: {
        currentComponent() {
            const id = this.$route.params.id?.toLowerCase();
            switch (id) {
                case 'about-us':
                    return 'AboutUs';
                case 'benefit-of-immigration-listing':
                    return 'Benefitpage';
                case 'immigration-business-growth':
                    return 'businessHome';
                case 'contact-us':
                    return 'contactus';
                case 'crm':
                    return 'crm';
                case 'for-consultants':
                    return 'forconsultants';
                case 'for-user':
                    return 'foruser';
                case 'whitelabel-app':
                    return 'getapp';
                case 'privacypolicy':
                    return 'PrivacyPolicy';
                case 'terms-&-condition':
                    return 'TermCondition';
                case 'termofuse':
                    return 'TermofUse';
                case 'terms':
                    return 'Terms';
                case 'works':
                    return 'Works';
                case 'commingsoon':
                    return 'CommingSoon';
                default:
                    return 'NotFound';
            }
        },
    }
}
</script>