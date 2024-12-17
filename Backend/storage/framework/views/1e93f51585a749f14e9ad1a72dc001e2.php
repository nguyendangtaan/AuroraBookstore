<?php $__env->startSection('title'); ?>
    Dashboard
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="row">
        <?php echo $__env->make('admin.layouts.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <div class="col-md-9">
            <div class="row mt-2">
                <div class="col-md-12">
                    <div class="card-header bg-white">
                        <h3 class="mt-2">Dashboard</h3>
                        <hr>
                    </div>
                    <div class="card-body">
                        <div class="row mb-2">
                            <!-- Today's orders -->
                            <div class="col-md-6 mb-2">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-white">
                                        <div class="d-flex justify-content-between">
                                            <strong class="badge bg-dark">
                                                Today's Orders
                                            </strong>
                                            <span class="badge bg-dark">
                                                <?php echo e($todayOrders->count()); ?>

                                            </span>
                                        </div>
                                    </div>

                                    <div class="card-footer text-center bg-white">
                                        <strong>
                                            <?php echo e($todayOrders->sum('total')); ?>

                                        </strong>
                                    </div>
                                </div>
                            </div>
                            <!-- Yesterday's Order -->
                            <div class="col-md-6 mb-2">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-white">
                                        <div class="d-flex justify-content-between">
                                            <strong class="badge bg-dark">
                                                Yesterday's Orders
                                            </strong>
                                            <span class="badge bg-dark">
                                                <?php echo e($yesterdayOrders->count()); ?>

                                            </span>
                                        </div>
                                    </div>

                                    <div class="card-footer text-center bg-white">
                                        <strong>
                                            <?php echo e($yesterdayOrders->sum('total')); ?>

                                        </strong>
                                    </div>
                                </div>
                            </div>
                            <!-- Month's Order -->
                            <div class="col-md-6 mb-2">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-white">
                                        <div class="d-flex justify-content-between">
                                            <strong class="badge bg-dark">
                                                Month's Orders
                                            </strong>
                                            <span class="badge bg-dark">
                                                <?php echo e($monthOrders->count()); ?>

                                            </span>
                                        </div>
                                    </div>

                                    <div class="card-footer text-center bg-white">
                                        <strong>
                                            <?php echo e($monthOrders->sum('total')); ?>

                                        </strong>
                                    </div>
                                </div>
                            </div>
                            <!-- Year's Order -->
                            <div class="col-md-6 mb-2">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-white">
                                        <div class="d-flex justify-content-between">
                                            <strong class="badge bg-dark">
                                                Year's Orders
                                            </strong>
                                            <span class="badge bg-dark">
                                                <?php echo e($yearOrders->count()); ?>

                                            </span>
                                        </div>
                                    </div>

                                    <div class="card-footer text-center bg-white">
                                        <strong>
                                            <?php echo e($yearOrders->sum('total')); ?>

                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\AuroraBookstore\Backend\resources\views\admin\index.blade.php ENDPATH**/ ?>