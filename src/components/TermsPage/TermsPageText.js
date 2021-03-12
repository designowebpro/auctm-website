import React from "react"
import Section from "components/_ui/Section"
import Container from "components/_ui/Container"
import styled from "@emotion/styled"

const MainContainer = styled(Container)`
    & div {
        margin: 2rem 0;
    }

    font-size: 1.8rem;

    .first-level-ol {
        margin: 0;
        padding: 0 !important;
    }

    ul {
        list-style-type: disc;
    }
    
    p {
        color: var(--text-dark);
    }
`

export default function TermsText() {
    return (
        <Section>
            <MainContainer>
                <p>
                    SquadRun Inc. (&ldquo;<strong>SquadRun</strong>&rdquo;,
                    &ldquo;<strong>we</strong>&rdquo; or &ldquo;
                    <strong>us</strong>&rdquo;) owns and operates the product
                    known as Auctm&nbsp; which provides services for real estate
                    professionals accessible through its website at{" "}
                    <a href="http://www.auctm.com">www.auctm.com</a> (the
                    &ldquo;<strong>Website</strong>&rdquo;) and related mobile
                    applications (collectively referred to as the &ldquo;
                    <strong>Auctm Services</strong>&rdquo; or &ldquo;
                    <strong>Services</strong>&rdquo;).
                </p>
                <p>
                    These Services were developed and intended for use by real
                    estate professionals. All users of our Services are subject
                    to the terms of this document (the &ldquo;
                    <strong>Terms of Use</strong>&rdquo; or &ldquo;
                    <strong>Agreement</strong>&rdquo;). Your use of the Services
                    or your registration with us constitutes your agreement to
                    these Terms of Use. We may change these Terms of Use from
                    time to time; where we make substantive changes, you will be
                    notified of the changes either by email or the next time you
                    access the Services. Your continued use of the Services will
                    indicate that you accept the current Terms of Use. You are
                    responsible for reviewing these Terms of Use on a regular
                    basis. These Terms of Use apply to all visitors and all who
                    access our Services. Except as otherwise indicated, all
                    persons using the Services are individually and collectively
                    referred to as &ldquo;<strong>you</strong>&rdquo; or &ldquo;
                    <strong>user</strong>&rdquo;.
                </p>

                <p>
                    We respect the privacy and security of our users. &nbsp;You
                    understand that by using our Services, you give consent to
                    the collection, use, and disclosure of Personal Information
                    as well as any non-personally identifiable information, as
                    described in more detail in our&nbsp;
                    <a href="https://www.auctm.com/privacy-policy/">
                        Privacy Policy
                    </a>
                    . Any capitalized terms used in these Terms of Use that have
                    not been defined here shall have the meaning attributed to
                    them in the{" "}
                    <a href="https://www.auctm.com/privacy-policy/">
                        Privacy Policy
                    </a>
                    .
                </p>

                <ol className="first-level-ol">
                    <li>
                        <strong>Registration</strong>
                    </li>
                    <div>
                        <p>
                            In connection with your use of any aspect of the
                            Services, you agree and represent as follows:
                        </p>
                        <ul>
                            <li>
                                <span>
                                    You are of legal age as required by
                                    applicable law and are otherwise capable of
                                    forming a legally binding contract;
                                </span>
                            </li>
                            <li>
                                <span>
                                    You have acquired and will maintain
                                    appropriate insurance coverage and have
                                    complied with all real estate licensing and
                                    regulatory requirements applicable to real
                                    estate agents and brokers in the areas for
                                    which you have requested the Services;
                                </span>
                            </li>
                            <li>
                                <span>
                                    You expressly agree to be contacted via
                                    email, SMS, text messaging, and push
                                    notifications by us, and third parties
                                    acting on our behalf, if required, regarding
                                    our Services;
                                </span>
                            </li>
                            <li>
                                <span>
                                    You agree that you will not use the Services
                                    in a manner that is inconsistent with the
                                    rights and restrictions as set forth in
                                    these Terms of Use.
                                </span>
                            </li>
                            <li>
                                <span>
                                    You are responsible for maintaining the
                                    security of your account and any passwords
                                    entered into the Services or provided to us.
                                    We do not accept any responsibility or
                                    liability for any loss or damage from your
                                    failure to comply with these security
                                    obligations.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <li>
                        <strong>Payments</strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                <span>
                                    <u>Payment Processing.</u> If you are the
                                    contracting customer in the applicable order
                                    form:
                                </span>
                                <ul>
                                    <li>
                                        <span>
                                            You agree to provide us with a valid
                                            and updated credit card information
                                            and you authorize us to charge that
                                            credit card for all fees related to
                                            the purchased Services listed in the
                                            Order Form for the initial
                                            subscription term and any renewal
                                            subscription term(s).
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            We will issue the charges against
                                            your credit card on the first day of
                                            the applicable billing period.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            You are responsible for providing
                                            complete and accurate billing and
                                            contact information to us and
                                            notifying us of any changes to such
                                            information.
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    <u>Late Fees.</u> If any invoiced amount is not
                                    received by us by the due date, then without
                                    limiting our rights or remedies those
                                    charges may accrue late interest at the rate
                                    of 1.5% of the outstanding balance per
                                    month, or the maximum rate permitted by law,
                                    whichever is lower.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Terms for payments will be governed by the
                                    registration or applicable order form used
                                    to contract for the Services.
                                </span>
                            </li>
                            <li>
                                <span>
                                    All fees are exclusive of all taxes, levies,
                                    or duties imposed by taxing authorities, and
                                    you shall be responsible for payment of all
                                    such applicable taxes, levies, or duties,
                                    excluding only applicable income tax.
                                </span>
                            </li>
                        </ol>
                    </div>
                    <li>
                        <strong>User Content</strong>
                    </li>
                    <div>
                        <span>
                            We respect the rights of third-party creators and
                            content owners and expect that you will do the same.
                            Given the nature of the Services and the volume of
                            information submitted, we cannot and do not monitor
                            the Materials (defined below) posted or transmitted
                            by you or any other person through your Auctm
                            Account .
                        </span>
                        <br />
                        <br />
                        <span>
                            You expressly agree that we: (a) will not be liable
                            for Materials, and (b) reserve the right to review,
                            reject, delete, remove, modify, or edit any
                            Materials at any time for any reason, without
                            liability and without notice to you.
                        </span>
                    </div>
                    <li>
                        <strong>
                            Acceptable Use and Your Responsibilities
                        </strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                <span>
                                    The following is a list of the types of
                                    activities that are prohibited on or through
                                    the Services:
                                </span>
                                <ul>
                                    <li>
                                        submitting Materials that are patently
                                        offensive, such as content that promotes
                                        racism, bigotry, hatred or physical harm
                                        of any kind against any group or
                                        individual;
                                    </li>
                                    <li>
                                        engaging in activities or submitting
                                        Materials that could be harmful to
                                        minors;
                                    </li>
                                    <li>
                                        engaging in activity or submitting
                                        Materials that harasses or advocates
                                        harassment of another person;
                                    </li>
                                    <li>
                                        engaging in activity that involves the
                                        transmission of junk mail or unsolicited
                                        mass mailing or spam to leads without
                                        their consent;
                                    </li>
                                    <li>
                                        engaging in activity, or submitting
                                        Materials, or promoting information that
                                        is false, misleading or promotes illegal
                                        activities or conduct that is abusive,
                                        threatening, obscene, defamatory or
                                        libelous;
                                    </li>
                                    <li>
                                        submitting Materials that displays
                                        pornographic or sexually explicit
                                        material of any kind;
                                    </li>
                                    <li>
                                        submitting Materials that provide
                                        instructional information about illegal
                                        activities such as making or buying
                                        illegal weapons, violating someone’s
                                        privacy, or providing or creating
                                        computer viruses;
                                    </li>
                                    <li>
                                        submitting Materials that contain
                                        viruses, trojan horses, worms, or any
                                        other similar forms of malware;
                                    </li>
                                    <li>
                                        engaging in unauthorized commercial
                                        activities and/or sales without our
                                        prior written consent such as
                                        advertising, solicitations, contests,
                                        sweepstakes, barter, and pyramid
                                        schemes;
                                    </li>
                                    <li>
                                        using any robot, spider, other automatic
                                        device, or manual process to monitor,
                                        copy, scrape web pages or the content
                                        contained in the Services or for any
                                        other unauthorized purpose without our
                                        prior written consent;
                                    </li>
                                    <li>
                                        using any device, software, or routine
                                        to interfere or attempt to interfere
                                        with the proper working of the Services;
                                    </li>
                                    <li>
                                        decompiling, reverse engineering, or
                                        disassembling the software or attempting
                                        to do so; or
                                    </li>
                                    <li>
                                        taking any action that imposes an
                                        unreasonable or disproportionately large
                                        load on the Services or our hardware and
                                        software infrastructure or that of any
                                        of our licensors or suppliers.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    In addition, you covenant and represent that
                                    you will not use the Services for any other
                                    purpose in violation of the law.
                                </span>
                            </li>
                            <li>
                                <span>You agree to:</span>
                                <ul>
                                    <li>
                                        use commercially reasonable efforts to
                                        prevent unauthorized access to or use of
                                        Services, and notify us promptly of any
                                        such unauthorized access or use,
                                    </li>
                                    <li>
                                        use the Services only in accordance with
                                        this Agreement, any applicable Order
                                        Forms and applicable laws and government
                                        regulations, and
                                    </li>
                                    <li>
                                        comply with terms of service of any
                                        third-party applications which you use
                                        and provide access to us in order to
                                        provide the Services.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Any use of the Services in breach of the
                                foregoing by you that we, in our discretion,
                                determine threatens the security, integrity or
                                availability of the Services, may result in our
                                immediate suspension of your use of the
                                Services, however we will use commercially
                                reasonable efforts under the circumstances to
                                provide you with notice and an opportunity to
                                remedy such violation or threat prior to any
                                such suspension.
                            </li>
                        </ol>
                    </div>
                    <li>
                        <strong>
                            Sharing Information and Ownership of the Services
                        </strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                <span>
                                    Auctm enables users to share various content
                                    on the Services as they determine. When you
                                    use the Services, information you post or
                                    share with others, such as your emails,
                                    Personal Information (as defined in the
                                    Privacy Policy), notes, comments, messages,
                                    photos, or other information, may become
                                    available to other users. All sharing of
                                    information is done at your own risk.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Unless otherwise agreed in writing signed by
                                    you and SquadRun, by submitting content,
                                    including your profile information, adding
                                    photos, video, data or other materials
                                    directly through the Services or suggesting
                                    any ideas or feedback (collectively,
                                    “Materials”), you hereby grant to us a
                                    royalty-free, perpetual, irrevocable, fully
                                    transferable, sub-licenseable, nonexclusive
                                    right and license to use, access, store,
                                    copy, modify, create derivative works from,
                                    and otherwise use and exploit all such
                                    Materials in any form, media, software or
                                    technology of any kind now existing or
                                    developed in the future. You also agree to
                                    indemnify, defend and hold harmless us from
                                    and against any claims or costs, including
                                    attorneys’ fees, arising from the use or
                                    transfer of these Materials.
                                </span>
                            </li>
                            <li>
                                <span>
                                    The Services, all content and other subject
                                    matter included on or within the Services
                                    other than Materials (“SquadRun Content”) is
                                    the exclusive property of SquadRun. We
                                    reserve all of its rights with respect to
                                    the SquadRun Content, and you may not
                                    display on any website or otherwise publish
                                    or make any commercial use of the SquadRun
                                    Content other than for your own use of the
                                    Services.
                                </span>
                            </li>
                            <li>
                                <span>
                                    The Services may offer forums, blogs,
                                    comments areas, bulletin boards and chat
                                    rooms (collectively, “Groups”) that are
                                    intended to provide users an interesting and
                                    stimulating forum in which they can express
                                    their opinions and share their ideas. We do
                                    not endorse the accuracy or reliability of
                                    any advice, opinion, statement or
                                    information posted on these Groups. Please
                                    use your best judgment, and be respectful of
                                    other individuals using these Groups. Do not
                                    use vulgar, abusive or hateful language.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Uploading copyrighted or other proprietary
                                    material of any kind on the Service without
                                    the express permission of the owner of that
                                    material is prohibited and may result in
                                    civil and/or criminal liability. Any
                                    information you disclose when posting a
                                    message in these Groups may become public.
                                    You should not include any information in
                                    your posting that you do not want other
                                    parties to see or use and you hereby agree
                                    that you will not hold us responsible for
                                    any third party’s use of information
                                    contained in such posting. To maintain a
                                    positive, creative environment in which
                                    users may share and display Materials, we
                                    ask that you only use the Services in a
                                    manner that is consistent with the terms of
                                    this Agreement. You agree not to use user
                                    names or Group titles that are offensive,
                                    obscene, or harassing to others. We reserve
                                    the right to require you to change your
                                    username or the title of your Group at any
                                    time and for any reason in our sole
                                    discretion.‍
                                </span>
                            </li>
                        </ol>
                    </div>
                    <li>
                        <strong>Use of Third-Party Services</strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                <span>
                                    As a part of our Services, we may offer
                                    links to web sites operated by various third
                                    parties and are not responsible or liable
                                    for any acts or omissions created or
                                    performed by these third parties. We provide
                                    such links for your convenience and
                                    reference only. We do not operate or control
                                    in any way any information, software,
                                    products or services available on such
                                    websites. Our inclusion of a link to a
                                    website does not imply any endorsement of
                                    the services or the site, its contents, or
                                    its sponsoring organization.
                                </span>
                            </li>
                            <li>
                                <span>
                                    The Services may contain or may be enjoined
                                    by third-party components including open
                                    source code, which are subject to their own
                                    terms and conditions. If you use the
                                    Services in conjunction with third-party
                                    data, products, services, platforms, etc.,
                                    then you must comply with the terms and
                                    conditions required by such third-party
                                    providers, and you will be carrying the
                                    entire risk to such use.
                                </span>
                            </li>
                        </ol>
                    </div>
                    <li>
                        <strong>License</strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                <span>
                                    We make available Auctm to access the
                                    Services via the Website and a mobile
                                    application. SquadRun does not warrant that
                                    Auctm will be compatible with your mobile
                                    device.
                                </span>
                            </li>
                            <li>
                                <span>
                                    SquadRun grants to you a non-exclusive,
                                    non-transferable, revocable license to
                                    access the Services.
                                </span>
                            </li>
                            <li>
                                <span>You may not:</span>
                                <ul>
                                    <li>
                                        modify, disassemble, decompile or
                                        reverse engineer the Services, except to
                                        the extent that such restriction is
                                        expressly prohibited by applicable law;
                                    </li>
                                    <li>
                                        rent, lease, loan, resell, sublicense,
                                        distribute or otherwise transfer your
                                        rights under this Agreement to any third
                                        party or use the Services to provide
                                        time-sharing or similar services for any
                                        third party;
                                    </li>
                                    <li>
                                        make any copies of any component of the
                                        Services;
                                    </li>
                                    <li>
                                        remove, circumvent, disable, damage or
                                        otherwise interfere with
                                        security-related features or features
                                        that prevent or restrict use or copying
                                        of any content accessible through the
                                        Services, or features that enforce
                                        limitations on use of the Services;
                                    </li>
                                    <li>
                                        delete the copyright and other
                                        proprietary rights notices in the
                                        Services; or
                                    </li>
                                    <li>
                                        use the Services in violation of
                                        applicable law.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    You acknowledge that SquadRun may from time
                                    to time upgrade the Services, and may
                                    automatically electronically upgrade the
                                    version of Auctm that you are using on your
                                    mobile device. You consent to such automatic
                                    upgrading on your mobile device, and agree
                                    that the terms and conditions of these Terms
                                    of Use will apply to all such upgrades. You
                                    agree to comply with applicable law related
                                    to use of Auctm and the Services. Standard
                                    carrier data charges may apply to your use
                                    of Auctm.
                                </span>
                            </li>
                            <li>
                                <span>
                                    SquadRun owns and has all right, title, and
                                    interest in any feedback provided by you,
                                    and you hereby grants to Squadrun a
                                    non-exclusive, non-transferable, worldwide,
                                    royalty-free, fully paid-up, perpetual, and
                                    irrevocable right and license to use such
                                    feedback in any form.
                                </span>
                            </li>
                        </ol>
                    </div>
                    <li>
                        <strong>Confidentiality</strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                <u>Use and Disclosure.</u> During the term of
                                this Agreement and at all times thereafter, you
                                will (a) hold all Confidential Information in
                                strict trust and confidence, (b) refrain from
                                using or permitting others to use Confidential
                                Information in any manner or for any purpose not
                                expressly permitted or required by this
                                Agreement, and (c) refrain from disclosing or
                                permitting others to disclose any Confidential
                                Information to any third party without obtaining
                                SquadRun’s express prior written consent on a
                                case-by-case basis. “Confidential Information”
                                means information (a) disclosed to you by us in
                                the process of providing the Services, and (b)
                                that is proprietary in nature, to which you are
                                provided access by Squadrun, that SquadRun
                                considers to be confidential or proprietary or
                                SquadRun has a duty to treat as confidential.
                            </li>
                            <li>
                                <u>Standard of Care.</u> You will protect the
                                Confidential Information from unauthorized use,
                                access, or disclosure in the same manner as you
                                protect your own confidential or proprietary
                                information of a similar nature, and with no
                                less than reasonable care.
                            </li>
                            <li>
                                <u>Exceptions.</u> Subject to your obligations
                                in this section, you will be permitted to
                                disclose Confidential Information to the extent
                                that such disclosure is expressly approved in
                                writing by SquadRun, or is required by
                                applicable law or court order, provided that you
                                immediately notify SquadRun in writing of such
                                required disclosure and cooperate with SquadRun,
                                at SquadRun’s reasonable request and expense, in
                                any lawful action to contest or limit the scope
                                of such required disclosure.
                            </li>
                            <li>
                                <u>Removal; Return.</u> Upon SquadRun’s request
                                and upon any termination of this Agreement, you
                                will promptly (a) return to SquadRun (if the
                                Confidential Information is in a form capable of
                                being returned) or, if so directed by SquadRun,
                                destroy all tangible embodiments of the
                                Confidential Information (in every form and
                                medium), (b) permanently erase all electronic
                                files containing or summarizing any Confidential
                                Information, and (c) certify to SquadRun in
                                writing that you have fully complied with the
                                foregoing obligations.
                            </li>
                        </ol>
                    </div>
                    <li>
                        <strong>Liability</strong>
                    </li>
                    <div>
                        <span>
                            Notwithstanding anything contained to the contrary,
                            in the event SquadRun has reasonable grounds to
                            believe that you are in violation of your
                            obligations under the terms of this Agreement, we
                            reserve the right to terminate your Auctm Account.
                            Further, in the event any third party holds SquadRun
                            liable for any breach of their confidential
                            information, and such breach can be traced back to
                            you, or any loss caused to SquadRun by breach by you
                            of any conditions under this Agreement then SquadRun
                            reserves its right (i) to recover from you, any and
                            all such losses, damages, costs, and other expenses
                            (including attorneys’ fees) suffered or incurred in
                            relation to such breach by you; and (ii) to avail of
                            any and every available remedy for such breach,
                            attributable to you, under applicable law.
                        </span>
                    </div>
                    <li>
                        <strong>
                            Representations and Warranties and Indemnity
                        </strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                You hereby represent and warrant that:
                                <ul>
                                    <li>
                                        you have full right, power, and
                                        authority to enter into and perform this
                                        Agreement without the consent of any
                                        third party (including any of your
                                        current or former employers);
                                    </li>
                                    <li>
                                        you have all necessary authority, rights
                                        and permissions to submit the Materials
                                        and grant the licenses described in
                                        these Agreement;{" "}
                                    </li>
                                    <li>
                                        the Materials and your use of the
                                        Service shall not infringe or
                                        misappropriate any copyright, trademark,
                                        trade secret, patent, or other
                                        intellectual property right of any third
                                        party or violate any other rights of
                                        third party, including, without
                                        limitation, any rights of privacy or
                                        publicity or any contractual rights,
                                    </li>
                                    <li>
                                        your use of the Services shall not
                                        violate any agreements between you and
                                        any third party.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                You agree to indemnify, defend and hold harmless
                                us, and our officers, directors, employees,
                                agents, and contractors and suppliers from and
                                against any and all claims, costs, demands,
                                damages, liabilities, or expenses, including,
                                without limitation, reasonable attorneys’ fees,
                                arising from or related to: (a) the Materials
                                you provide, (b) your use of the Services, or
                                (c) your breach of these Terms of Use.
                            </li>
                        </ol>
                    </div>
                    <li>
                        <strong>Disclaimers and Limitations</strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                We intend that the information contained in our
                                Services be accurate and reliable; however,
                                errors and data loss may sometimes occur. From
                                time to time, we may issue an update to the
                                Services, which may add, modify, and/or remove
                                features from the Services. These updates may be
                                launched automatically with little or no notice,
                                although we may make reasonable efforts to
                                notify you in advance of an upcoming update
                            </li>
                            <li>
                                THE SERVICE AND THE INFORMATION, SOFTWARE,
                                PRODUCTS AND SERVICES ASSOCIATED WITH IT ARE
                                PROVIDED “AS IS.” WE AND/OR OUR SUPPLIERS,
                                LICENSORS, PARTNERS AND AFFILIATES DISCLAIM ANY
                                WARRANTY OF ANY KIND, WHETHER EXPRESSED OR
                                IMPLIED, AS TO ANY MATTER WHATSOEVER RELATING TO
                                THE SERVICE AND ANY INFORMATION, SOFTWARE,
                                PRODUCTS AND SERVICES PROVIDED HEREIN, INCLUDING
                                WITHOUT LIMITATION THE IMPLIED WARRANTIES OF
                                MERCHANTABILITY, FITNESS FOR A PARTICULAR
                                PURPOSE, TITLE, AND NON-INFRINGEMENT.
                            </li>
                            <li>
                                USE OF OUR SERVICES IS AT YOUR OWN RISK. WE
                                AND/OR OUR SUPPLIERS, ARE NOT LIABLE FOR ANY
                                DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL
                                OR CONSEQUENTIAL DAMAGES OR OTHER INJURY ARISING
                                OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF
                                OUR SERVICES OR WITH THE DELAY OR INABILITY TO
                                USE THE SERVICES, LOSS OF DATA, BREACH OF THE
                                SERVICE OR FOR ANY INFORMATION, SOFTWARE,
                                PRODUCTS AND SERVICES OBTAINED THROUGH US, OR
                                OTHERWISE ARISING OUT OF THE USE OF THE
                                SERVICES, WHETHER RESULTING IN WHOLE OR IN PART,
                                FROM BREACH OF CONTRACT, TORTIOUS BEHAVIOR,
                                NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN
                                IF WE AND/OR OUR SUPPLIERS HAD BEEN ADVISED OF
                                THE POSSIBILITY OF DAMAGES. NO ACTION ARISING
                                OUT OF THIS AGREEMENT, REGARDLESS OF THE FORM OF
                                ACTION, MAY BE BROUGHT BY YOU MORE THAN 1 (ONE)
                                YEAR AFTER THE ACTION ACCRUED.
                            </li>
                            <li>
                                IN NO EVENT WILL OUR LIABILITY FOR ANY CAUSE OF
                                ACTION ARISING OUT OF OR RELATED TO THIS
                                AGREEMENT WHETHER IN CONTRACT OR TORT OR BREACH
                                OF WARRANTIES OR STRICT LIABILITY OR FAILURE OF
                                ESSENTIAL PURPOSE OR OTHERWISE EXCEED THE AMOUNT
                                OF TOTAL FEES ACTUALLY PAID BY YOU FOR THE
                                SERVICES UNDER THIS AGREEMENT IN THE ONE (1)
                                MONTH IMMEDIATELY PRECEDING THE INCIDENT GIVING
                                RISE TO THE CLAIM OR EQUIVALENT AMOUNT, AS
                                CALCULATED ON AN AMORTIZED BASIS.{" "}
                            </li>
                        </ol>
                    </div>
                    <li>
                        <strong>Term and Termination</strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                <u>Term.</u> This Agreement shall be valid from
                                the date you register as a user of the Services
                                until the date this Agreement is terminated in
                                accordance with its terms or based on the
                                expiration of the term as set forth in the
                                applicable order form.
                            </li>
                            <li>
                                <u>Termination by SquadRun.</u> SquadRun may, at
                                any time and at its sole discretion, terminate
                                this Agreement, in whole or in part. Upon the
                                termination of this Agreement by SquadRun,
                                Squadrun shall refund pro-rata any fees paid in
                                advance, except for those explicitly designated
                                as non-refundable in the applicable order form.
                                However, if SquadRun terminates this Agreement
                                on account of your violation of the terms of
                                section 4 above, it shall not be liable to
                                refund any part of any advance fees paid.
                            </li>
                            <li>
                                <u>Termination by You.</u> You may terminate
                                this Agreement at any time by contacting us at
                                legal@auctm.com; however you must provide notice
                                of your intention to cancel your subscription at
                                least 30 (thirty) days prior to the end of the
                                current subscription term to avoid being charged
                                for the next billing cycle. Upon your
                                termination of this Agreement, we will delete
                                your account and you may receive a pro-rata
                                refund of fees that a) were not designated as
                                non-refundable, or b) were paid in advance
                                beyond the end of the current subscription term.
                            </li>
                            <li>
                                Termination of this Agreement will not affect
                                either party’s liability for any breach of this
                                Agreement the party may have committed before
                                the expiration or termination.
                            </li>
                        </ol>
                    </div>
                    <li>
                        <strong>General Provisions</strong>
                    </li>
                    <div>
                        <ol type="a">
                            <li>
                                <strong>
                                    <u>Governing Law and Jurisdiction.</u>
                                </strong>{" "}
                                This Agreement shall be governed by and
                                construed under the laws of Delaware. The
                                parties consent to the exclusive jurisdiction
                                and venue of the state courts located in and
                                serving Santa Clara County, California and the
                                federal courts in the Northern District of
                                California to settle any dispute arising out of
                                or in connection with this Agreement (including
                                a dispute regarding the existence, validity or
                                termination of this Agreement).
                            </li>
                            <li>
                                <strong>
                                    <u>Dispute Resolution.</u>
                                </strong>{" "}
                                If any dispute, controversy or claim arises
                                between the parties under, out of, or in
                                relation to this Agreement, including any
                                dispute concerning the formation, construction,
                                interpretation, or breach of this Agreement or a
                                party’s performance of its obligations, the
                                Parties shall attempt in the first instance to
                                resolve the same through mutual good faith
                                consultation. If the dispute is not resolved in
                                this manner within 45 (forty-five) days of a
                                Party’s notice of a Dispute, then the parties
                                agree to resort to binding arbitration in
                                accordance with the applicable law, to resolve
                                all disputes concerning this Agreement. The
                                disputes shall be resolved by a sole arbitrator
                                to be appointed by the parties to the dispute
                                mutually.
                            </li>
                            <li>
                                <strong>
                                    <u>Conflicts.</u>
                                </strong>{" "}
                                If there is a conflict between the documents
                                that make up this Agreement, the documents will
                                control in the following order (highest
                                precedence first): any addenda or written
                                modifications to the Agreement signed by both
                                parties; the Order Form; and these Terms of Use.
                            </li>
                            <li>
                                <strong>
                                    <u>Severability.</u>
                                </strong>{" "}
                                If any provision of this Agreement is prohibited
                                or unenforceable in any jurisdiction, such
                                prohibition or unenforceability shall not
                                invalidate the remaining provisions hereof or
                                affect the validity or enforceability of such
                                provision in any other jurisdiction.
                            </li>
                            <li>
                                <strong>
                                    <u>No Assignment.</u>
                                </strong>{" "}
                                This Agreement and your rights and obligations
                                under this Agreement may not be assigned,
                                delegated, or otherwise transferred, in whole or
                                in part, by you, under any circumstances.
                                SquadRun may assign this Agreement or any of its
                                rights under this Agreement to any third party
                                without your consent.
                            </li>
                            <li>
                                <strong>
                                    <u>Notices.</u>
                                </strong>{" "}
                                SquadRun may give any notice required by this
                                Agreement by means of a general notice or pop-up
                                notification on Auctm . Such notice shall be
                                deemed to have been given immediately upon being
                                dispatched by SquadRun. You may give notice to
                                SquadRun, by way of email or registered post, to
                                the following address: legal@auctm.com.
                            </li>
                            <li>
                                <strong>
                                    <u>Remedies and Rights.</u>
                                </strong>{" "}
                                All remedies, either under this Agreement, or by
                                law or otherwise afforded to each party in this
                                Agreement shall be cumulative and not
                                alternative. Unless expressly provided to the
                                contrary in this Agreement, the rights of a
                                party expressed under this Agreement for damages
                                or otherwise for breach by the other party are
                                without limitation to any other rights or
                                remedies of the first mentioned party including
                                rights to injunction, specific relief,
                                restitution or other equitable relief, none of
                                which rights or remedies shall be affected or
                                diminished thereby.
                            </li>
                            <li>
                                <strong>
                                    <u>Waiver.</u>
                                </strong>{" "}
                                No delay or omission to exercise any right,
                                power or remedy accruing to any party, upon any
                                breach of default of any party under this
                                Agreement, shall impair any such right, power or
                                remedy of any party nor shall it be construed to
                                be a waiver of any such breach or default. Any
                                waiver, permit, consent or approval of any kind
                                or character on the part of either party, of any
                                provisions or conditions of this Agreement, must
                                be in writing and shall be effective only to the
                                extent specifically set forth in such writing.
                            </li>
                            <li>
                                <strong>
                                    <u>Good Faith.</u>
                                </strong>{" "}
                                You shall, in good faith, do all acts necessary
                                to give effect to the provisions of this
                                Agreement. You also agree to, in good faith, do
                                all acts necessary as are within their powers to
                                carry out your obligations under this Agreement
                                and give effect to the provisions of this
                                Agreement.
                            </li>
                            <li>
                                <strong>
                                    <u>Modifications to Auctm.</u>
                                </strong>{" "}
                                SquadRun reserves the right at any time to
                                modify or discontinue, temporarily or
                                permanently, the Services (or any part thereof)
                                with or without notice. You agree that SquadRun
                                shall not, under any circumstances, be liable to
                                you or to any third party for any modification,
                                suspension or discontinuance of the Services.
                            </li>
                        </ol>
                    </div>
                </ol>
            </MainContainer>
        </Section>
    )
}
